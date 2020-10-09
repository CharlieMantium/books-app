import map from 'lodash/map';

import { Book } from '../types/books';
import { createUrlResources } from './helpers';

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
  const urlResources = createUrlResources(title, author, language, category, loadedPage);
  const url = `${urlEntryPoint}${urlResources}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(url);
  console.log(data);
  const mappedBooks = map(data.items, (book) => ({
    cover: book?.volumeInfo?.imageLinks?.smallThumbnail,
    description: book?.searchInfo?.textSnippet,
    id: book?.id,
    title: book?.volumeInfo?.title,
  }));

  if (mappedBooks.length) {
    setBooks((prevState) => [...prevState, ...mappedBooks]);
  } else setIsMoreData(false);
};
