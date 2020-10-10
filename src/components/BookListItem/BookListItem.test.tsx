import React from 'react';
import { render } from '@testing-library/react';

import { testBookData, testBookDataWithoutDescription } from '../../tests/testData';
import { Book } from '../../types/types';

import BookListItem from './BookListItem';

describe("BookListItem", () => {
  let bookData: Book;

  beforeEach(() => {
    bookData = testBookData
  });

  it("renders correctly when description was present in database", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={bookData}
      />
    );
    expect(queryByTestId("book-title")).toBeTruthy();
    expect(queryByTestId("book-covert-wrapper-div")).toBeTruthy();
    expect(queryByTestId("book-cover-img")).toBeTruthy();
    expect(queryByTestId("book-description-from-api")).toBeTruthy();
    expect(queryByTestId("book-description-replacement")).toBeFalsy();
  });

  it("renders correctly when description was missing in database", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={testBookDataWithoutDescription}
      />
    );
    expect(queryByTestId("book-title")).toBeTruthy();
    expect(queryByTestId("book-covert-wrapper-div")).toBeTruthy();
    expect(queryByTestId("book-cover-img")).toBeTruthy();
    expect(queryByTestId("book-description-from-api")).toBeFalsy();
    expect(queryByTestId("book-description-replacement")).toBeTruthy();
  });

  it("renders correctly book title", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={bookData}
      />
    );
    const bookTitle = queryByTestId("book-title");
    expect(bookTitle?.textContent).toBe(bookData.title);
  });

  it("passes correct src to book cover", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={bookData}
      />
    );
    const bookCover = queryByTestId("book-cover-img");
    expect(bookCover).toHaveAttribute('src', bookData.cover);
  });

  it("passes correct alternative description to book cover", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={bookData}
      />
    );
    const bookCover = queryByTestId("book-cover-img");
    const altDescription = `"${bookData.title}" book cover`
    expect(bookCover).toHaveAttribute('alt', altDescription);
  });

  it("renders correct book description from api", () => {
    const { queryByTestId } = render(
      <BookListItem
        bookData={bookData}
      />
    );
    const bookDescription = queryByTestId("book-description-from-api");
    expect(bookDescription?.textContent).toBe(bookData.description);
  });

  it("renders correct replacement book description when there is non from api ", () => {
    const { queryByTestId } = render(
      <BookListItem
      bookData={testBookDataWithoutDescription}
      />
    );
    const bookDescription = queryByTestId("book-description-replacement");
    expect(bookDescription?.textContent).toBe('No description');
  });
});