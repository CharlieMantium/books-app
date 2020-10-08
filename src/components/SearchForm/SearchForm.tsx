import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem, lighten } from 'polished';

import { colors, screenSizes } from '../../styles/base';

import FormTextInput from '../FormTextInput/FormTextInput';

const StyledForm = styled.form`
  width: 100%;
  padding: 0;

  @media (min-width: ${screenSizes.desktop}) {
    padding: 0 ${rem(200)};
  }
`;

const StyledSearchPanel = styled.fieldset<{ isVisible: boolean; isAdvancedPanel: boolean }>`
  position: ${({ isVisible, isAdvancedPanel }) =>
    !isVisible && isAdvancedPanel ? 'absolute' : 'static'};
  top: ${({ isVisible, isAdvancedPanel }) => !isVisible && !isAdvancedPanel && `${rem(100)}`};
  z-index: ${({ isAdvancedPanel }) => isAdvancedPanel && '-1'};
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible, isAdvancedPanel }) =>
    !isVisible && isAdvancedPanel && `translateY(-${rem(100)})`};
  border: none;
  margin: 0;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(10)};
`;

const StyledButton = styled.button`
  padding: ${rem(1)} ${rem(10)};
  width: 40%;
  max-width: ${rem(100)};
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};
  cursor: pointer;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: ${colors.beta};
    background-color: ${lighten(0.1, colors.gamma)};
  }
`;

interface SearchFormProps {
  title: string;
  setTitle: (title: string) => void;
  setAuthor: (title: string) => void;
  setLanguage: (title: string) => void;
  setYear: (title: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  title,
  setTitle,
  setAuthor,
  setLanguage,
  setYear,
}) => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState<boolean>(false);
  const [titleInputValue, setTitleInputValue] = useState<string>('');
  const [authorInputValue, setAuthorInputValue] = useState<string>('');
  const [languageInputValue, setLanguageInputValue] = useState<string>('');
  const [yearInputValue, setYearInputValue] = useState<string>('');

  const onAdvancedSearchButtonClick = () => setIsAdvancedSearch((state) => !state);
  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInputValue(e.target.value);
  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthorInputValue(e.target.value);
  const handleLanguageInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLanguageInputValue(e.target.value);
  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYearInputValue(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(titleInputValue);
    setAuthor(authorInputValue);
    setLanguage(languageInputValue.toLowerCase());
    setYear(yearInputValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSearchPanel isVisible={true} isAdvancedPanel={false}>
        <FormTextInput name="title" value={titleInputValue} onChange={handleTitleInputChange} />
        <ButtonWrapper>
          <StyledButton onClick={onAdvancedSearchButtonClick}>Advanced</StyledButton>
          <StyledButton type="submit">Search</StyledButton>
        </ButtonWrapper>
      </StyledSearchPanel>
      <StyledSearchPanel isVisible={isAdvancedSearch} isAdvancedPanel={true}>
        <FormTextInput name="author" value={authorInputValue} onChange={handleAuthorInputChange} />
        <FormTextInput
          name="language"
          value={languageInputValue}
          onChange={handleLanguageInputChange}
        />
        <FormTextInput name="year" value={yearInputValue} onChange={handleYearInputChange} />
      </StyledSearchPanel>
    </StyledForm>
  );
};

export default SearchForm;
