import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test("renders component", () => {
  const {getByText} = render(<App />)
  expect(getByText('Book App')).toBeInTheDocument()
})