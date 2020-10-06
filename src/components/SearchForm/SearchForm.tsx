import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTextInput = styled.input`
  padding: ${rem(1)} ${rem(10)};
  width: 70%;
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};

  &::-webkit-input-placeholder {
    color: ${colors.alpha};
    opacity: 0.5;
  }
`;

const StyledSubmitInput = styled.input`
  padding: ${rem(1)} ${rem(10)};
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};
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
