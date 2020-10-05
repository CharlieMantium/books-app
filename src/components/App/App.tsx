import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import map from 'lodash/map';

import { Book } from '../../types/books';

import Layout from '../../styles/Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';

const StyledHeader = styled.h1`
  margin: ${rem(10)} 0;
  text-align: center;
`;

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async (searchedTitle: string): Promise<void> => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchedTitle}&maxResults=40`,
      );
      const data = await response.json();
      const mappedBooks = map(data.items, (book) => ({
        title: book?.volumeInfo?.title,
        cover: book?.volumeInfo?.imageLinks?.smallThumbnail,
        description: book?.searchInfo?.textSnippet,
      }));
      setBooks(mappedBooks);
    };
    if (title.length) fetchBooks(title);
  }, [title]);

  return (
    <Layout>
      <StyledHeader>Book App</StyledHeader>
      <SearchForm title={title} setTitle={setTitle} />
      <BookList books={books} />
    </Layout>
  );
};

export default App;
