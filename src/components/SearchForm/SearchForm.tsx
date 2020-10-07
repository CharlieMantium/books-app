import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem, lighten } from 'polished';

import { colors, screenSizes } from '../../styles/base';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${screenSizes.rotatedMobile}) {
    justify-content: space-around;
  }

  @media (min-width: ${screenSizes.largeMobile}) {
    margin: ${rem(30)} 0;
  }
`;

const StyledTextInput = styled.input`
  padding: ${rem(1)} ${rem(10)};
  width: 70%;
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};
  transition: background-color 0.5s ease-in-out;

  &::-webkit-input-placeholder {
    color: ${colors.alpha};
    opacity: 0.5;
  }

  &:hover {
    background-color: ${lighten(0.1, colors.gamma)};
  }
`;

const StyledSubmitInput = styled.input`
  padding: ${rem(1)} ${rem(10)};
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: ${colors.beta};
    background-color: ${lighten(0.1, colors.gamma)};
  }
`;

interface SearchFormProps {
  title: string;
  setTitle: (title: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ title, setTitle }) => {
  const [titleInputValue, setTitleInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInputValue(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(titleInputValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextInput
        type="text"
        value={titleInputValue}
        onChange={handleChange}
        placeholder="Book title..."
      />
      <StyledSubmitInput type="submit" value="Search" />
    </StyledForm>
  );
};

export default SearchForm;
