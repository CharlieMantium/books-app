import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import Layout from '../../styles/Layout/Layout';

const StyledHeader = styled.h1`
  margin: ${rem(10)} 0;
  text-align: center;
`;

const App: React.FC = () => (
  <Layout>
    <StyledHeader>Book-App</StyledHeader>
  </Layout>
);

export default App;
