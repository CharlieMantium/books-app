import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { screenSizes } from '../../styles/base';
import { Book } from '../../types/books';
import { fetchBooks } from '../../helpers/fetch';

import Layout from '../../styles/Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';

const StyledHeader = styled.h1`
  margin: ${rem(10)} 0;
  width: 100%;
  font-family: 'Great Vibes', cursive;
  text-align: center;

  @media (min-width: ${screenSizes.largeMobile}) {
    font-size: 3rem;
  }
`;

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (title) fetchBooks(title, setBooks);
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
