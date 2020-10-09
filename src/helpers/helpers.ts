import includes from 'lodash/includes';
import map from 'lodash/map';

import { Book } from '../types/types';

export const createUrlResources = (
  title: string,
  author: string,
  language: string,
  category: string,
  loadedPage: number,
  numberOfResults: number,
): string => {
  const titleSearchString = title.length ? `+intitle:${title.replace(/\s+/g, '+')}` : '';
  const authorSearchString = author.length ? `+inauthor:${author.replace(/\s+/g, '+')}` : '';
  const languageSearchString = language.length ? `&langRestrict=${language}` : '';
  const categorySearchString = category.length ? `+subject:${category}` : '';
  const dataPageString = `&startIndex=${loadedPage * 10}`;

  return `volumes?q=${titleSearchString}${categorySearchString}${authorSearchString}${languageSearchString}${dataPageString}&maxResults=${numberOfResults}`;
};

export const filterOutDuplicateBooks = (currentBooks: Book[], newBooks: Book[]): Book[] => {
  const currentBooksID = map(currentBooks, (currentBook: Book) => currentBook.id);

  return newBooks.filter((newBook) => !includes(currentBooksID, newBook.id));
};
