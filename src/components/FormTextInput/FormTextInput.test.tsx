import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import FormTextInput from './FormTextInput';

describe("FormTextInput", () => {
  let name: string;
  let value: string;
  let onChange: () => void;
  let placeholder: string;

  beforeEach(() => {
    name = "testName";
    value = "testValue";
    onChange = jest.fn();
    placeholder = "testPlaceholder";
  })

  it("renders correctly", () => {
    const { queryByTestId } = render(
      <FormTextInput name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    );
    expect(queryByTestId("label")).toBeTruthy();
    expect(queryByTestId("input-name-paragraph")).toBeTruthy();
    expect(queryByTestId("input")).toBeTruthy();
  })

  it("renders input name correctly", () => {
    const { queryByTestId } = render(
      <FormTextInput name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    );
    const inputName = queryByTestId("input-name-paragraph");
    if (inputName) {
      expect(inputName.textContent).toBe(name);
    };
  });

  it("renders placeholder correctly", () => {
    const { queryByTestId } = render(
      <FormTextInput name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    );
    const input = queryByTestId("input") as HTMLInputElement;
    if (input) {
      expect(input.placeholder).toBe(placeholder);
    };
  });

  it("changes input value on change", async () => {
    const { queryByTestId, rerender } = render(
      <FormTextInput name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    );
    let input = queryByTestId("input") as HTMLInputElement;
    const newValue = "new test value";
    if (input) {
      rerender(<FormTextInput name={name} value={newValue} onChange={onChange} placeholder={placeholder}/>)
      expect(input.value).toBe(newValue);
    };
  });

  it("fires onChange function on change", () => {
    const { queryByTestId } = render(
      <FormTextInput name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    );
    const input = queryByTestId("input") as HTMLInputElement;
    const newValue = "new test value";
    if (input) {
      fireEvent.change(input, {target: {value: newValue}});
      expect(onChange).toHaveBeenCalled();
    };
  });
});