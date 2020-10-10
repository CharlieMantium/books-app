import React from 'react';
import { render } from '@testing-library/react';

import { currentTestBooksData} from '../../tests/testData';
import { Book } from '../../types/types';

import BookList from './BookList';

describe("BookList", () => {
  let books: Book[];
  let incrementPageNumber: () => void;
  let isMoreData: boolean;

  beforeEach(() => {
    books = currentTestBooksData,
    incrementPageNumber,
    isMoreData = true
  });

  it("renders correctly", async () => {
    const { queryByTestId } = render(
      <BookList
      books={books}
      incrementPageNumber={incrementPageNumber}
      isMoreData={isMoreData}
      />
    );
    expect(queryByTestId("book-list-wrapper")).toBeTruthy();
  });
});