import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import { rem } from 'polished';

import { colors, screenSizes } from '../base';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  };

  body {
    height: 100vh;
    background-color: ${colors.alpha};
    font-family: 'Open Sans', sans-serif;
    color: ${colors.beta};
  };

  *, *::before, *::after {
    box-sizing: inherit;
  };
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(20)};

  @media (min-width: ${screenSizes.rotatedMobile}) {
    padding: ${rem(20)} ${rem(50)};
  }

  @media (min-width: ${screenSizes.largeMobile}) {
    padding: ${rem(30)} ${rem(30)};
  }

  @media (min-width: ${screenSizes.desktop}) {
    padding: ${rem(50)} ${rem(100)};
  }
`;

const Layout: React.FC = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
