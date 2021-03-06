import React from 'react';
import { render } from '@testing-library/react';

import Loader from './Loader';

describe("Loader", () => {
  it("renders correctly", async () => {
    const { queryByTestId } = render(
      <Loader />
    );
    expect(queryByTestId("loader-wrapper")).toBeTruthy();
  });
});