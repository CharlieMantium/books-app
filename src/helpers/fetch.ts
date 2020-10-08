import map from 'lodash/map';
import filter from 'lodash/filter';

import { Book } from '../types/books';

export const fetchBooks = async (
  searchedTitle: string,
  author: string,
  language: string,
  year: string,
  setBooks: (books: Book[]) => void,
): Promise<void> => {
  const authorSearchString = author.length ? `+inauthor:${author}` : '';
  const languageSearchString = language.length ? `&langRestrict=${language}` : '';
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchedTitle}${authorSearchString}${languageSearchString}&maxResults=40`;
  const response = await fetch(url);
  const data = await response.json();
  const mappedBooks = map(data.items, (book) => ({
    cover: book?.volumeInfo?.imageLinks?.smallThumbnail,
    description: book?.searchInfo?.textSnippet,
    id: book?.id,
    title: book?.volumeInfo?.title,
    year: book?.volumeInfo?.publishedDate?.substring(0, 4),
  }));
  const filteredBooks = year ? filter(mappedBooks, { year }) : mappedBooks;
  setBooks(filteredBooks);
};
