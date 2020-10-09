import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: ${rem(500)}; */
`;

const LoaderComponent = () => (
  <LoaderWrapper>
    <Loader type="Circles" color={colors.beta} height={80} width={80} />
  </LoaderWrapper>
);

export default LoaderComponent;
