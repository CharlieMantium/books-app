import React from 'react';
import { render } from '@testing-library/react';

import SearchForm from './SearchForm';

describe("SearchForm", () => {
  let setBooks: () => void;
  let setIsMoreData: () => void;
  let loadedPage: number;
  let setLoadedPage: () => void;

  beforeEach(() => {
    setBooks = jest.fn();
    setIsMoreData = jest.fn();
    loadedPage = 0;
    setLoadedPage = jest.fn();
  })

  it("renders correctly", async () => {
    const { queryByTestId } = render(
      <SearchForm
        setBooks={setBooks}
        setIsMoreData={setIsMoreData}
        loadedPage={loadedPage}
        setLoadedPage={setLoadedPage}
      />
    );
    expect(queryByTestId("form")).toBeTruthy();
    expect(queryByTestId("regular-search-panel")).toBeTruthy();
    expect(queryByTestId("advanced-search-panel")).toBeTruthy();
    expect(queryByTestId("advanced-search-button")).toBeTruthy();
    expect(queryByTestId("submit-button")).toBeTruthy();
  });
});
