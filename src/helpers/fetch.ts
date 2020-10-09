import map from 'lodash/map';

import { Book } from '../types/types';
import { createUrlResources, filterOutDuplicateBooks } from './helpers';

export const fetchBooks = async (
  title: string,
  author: string,
  language: string,
  category: string,
  loadedPage: number,
  setBooks: (books: Book[] | { (prevState: Book[]): Book[] }) => void,
  setIsMoreData: (isThereMoreData: boolean) => void,
): Promise<void> => {
  const urlEntryPoint = 'https://www.googleapis.com/books/v1/';
  const numberOfResults = 10;
  const urlResources = createUrlResources(
    title,
    author,
    language,
    category,
    loadedPage,
    numberOfResults,
  );
  const response = await fetch(`${urlEntryPoint}${urlResources}`);
  const data = await response.json();
  const mappedBooks = map(data.items, (book) => ({
    cover: book?.volumeInfo?.imageLinks?.smallThumbnail,
    description: book?.searchInfo?.textSnippet,
    id: book?.id,
    title: book?.volumeInfo?.title,
  }));

  if (mappedBooks.length === numberOfResults) {
    setBooks((prevState) => [...prevState, ...filterOutDuplicateBooks(prevState, mappedBooks)]);
  } else setIsMoreData(false);
};
