import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { screenSizes } from '../../styles/base';
import { Book } from '../../types/types';

import Layout from '../../styles/Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';

const Header = styled.h1`
  margin: ${rem(10)} 0;
  font-family: 'Great Vibes', cursive;
  text-align: center;

  @media (min-width: ${screenSizes.largeMobile}) {
    font-size: 3rem;
  }
`;

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loadedPage, setLoadedPage] = useState<number>(0);
  const [isMoreData, setIsMoreData] = useState<boolean>(true);

  const incrementPageNumber = () => setLoadedPage((state) => state + 1);

  return (
    <Layout>
      <Header>Book App</Header>
      <SearchForm
        setBooks={setBooks}
        setIsMoreData={setIsMoreData}
        loadedPage={loadedPage}
        setLoadedPage={setLoadedPage}
      />
      <BookList books={books} incrementPageNumber={incrementPageNumber} isMoreData={isMoreData} />
    </Layout>
  );
};

export default App;
