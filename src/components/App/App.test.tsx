import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe("App", () => {
  test("renders correctly", () => {
    const {getByText} = render(<App />);
    expect(getByText('Book App')).toBeInTheDocument();
  })
});