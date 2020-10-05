import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import Layout from '../../styles/Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';

const StyledHeader = styled.h1`
  margin: ${rem(10)} 0;
  text-align: center;
`;

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  return (
    <Layout>
      <StyledHeader>Book App</StyledHeader>
      <SearchForm title={title} setTitle={setTitle} />
      <BookList />
    </Layout>
  );
};

export default App;
