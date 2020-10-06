import map from 'lodash/map';

import { Book } from '../types/books';

export const fetchBooks = async (
  searchedTitle: string,
  setBooks: (books: Book[]) => void,
): Promise<void> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchedTitle}&maxResults=40`,
  );
  const data = await response.json();
  const mappedBooks = map(data.items, (book) => ({
    cover: book?.volumeInfo?.imageLinks?.smallThumbnail,
    description: book?.searchInfo?.textSnippet,
    id: book?.id,
    title: book?.volumeInfo?.title,
  }));
  setBooks(mappedBooks);
};
