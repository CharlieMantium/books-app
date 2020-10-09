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
  const [author, setAuthor] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loadedPage, setLoadedPage] = useState<number>(0);
  const [isMoreData, setIsMoreData] = useState<boolean>(true);

  const incrementPageNumber = () => setLoadedPage((state) => state + 1);
  const resetSearch = () => {
    setTitle('');
    setAuthor('');
    setLanguage('');
    setBooks([]);
    setLoadedPage(0);
    setIsMoreData(true);
  };

  useEffect(() => {
    if (title || author || language || category)
      fetchBooks(title, author, language, category, loadedPage, setBooks, setIsMoreData);
  }, [title, author, language, category, loadedPage]);

  return (
    <Layout>
      <StyledHeader>Book App</StyledHeader>
      <SearchForm
        resetSearch={resetSearch}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setLanguage={setLanguage}
        setCategory={setCategory}
        setBooks={setBooks}
        setLoadedPage={setLoadedPage}
        setIsMoreData={setIsMoreData}
      />
      <BookList books={books} incrementPageNumber={incrementPageNumber} isMoreData={isMoreData} />
    </Layout>
  );
};

export default App;
