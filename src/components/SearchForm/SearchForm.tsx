import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { rem, lighten } from 'polished';

import { colors, screenSizes } from '../../styles/base';
import { Book } from '../../types/types';
import { fetchBooks } from '../../helpers/fetch';

import FormTextInput from '../FormTextInput/FormTextInput';

const Form = styled.form`
  width: 100%;
  padding: 0;

  @media (min-width: ${screenSizes.desktop}) {
    padding: 0 ${rem(200)};
  }
`;

const SearchPanel = styled.fieldset<{ isVisible: boolean; isAdvancedPanel: boolean }>`
  position: ${({ isVisible, isAdvancedPanel }) => !isVisible && isAdvancedPanel && 'absolute'};
  top: ${({ isVisible, isAdvancedPanel }) => !isVisible && !isAdvancedPanel && `${rem(100)}`};
  z-index: ${({ isAdvancedPanel }) => isAdvancedPanel && '-1'};
  display: flex;
  margin: 0;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  border: none;
  transform: ${({ isVisible, isAdvancedPanel }) =>
    !isVisible && isAdvancedPanel && `translateY(-${rem(100)})`};
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(10)};
`;

const Button = styled.button`
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
  setBooks: (books: Book[] | { (prevState: Book[]): Book[] }) => void;
  setIsMoreData: (isThereMoreData: boolean) => void;
  loadedPage: number;
  setLoadedPage: (page: number) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setBooks,
  setIsMoreData,
  loadedPage,
  setLoadedPage,
}) => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const [titleInputValue, setTitleInputValue] = useState<string>('');
  const [authorInputValue, setAuthorInputValue] = useState<string>('');
  const [languageInputValue, setLanguageInputValue] = useState<string>('');
  const [categoryInputValue, setCategoryInputValue] = useState<string>('');

  const onAdvancedSearchButtonClick = () => setIsAdvancedSearch((state) => !state);

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInputValue(e.target.value);
  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthorInputValue(e.target.value);
  const handleLanguageInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLanguageInputValue(e.target.value);
  const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategoryInputValue(e.target.value);

  const resetSearch = () => {
    setTitle('');
    setAuthor('');
    setLanguage('');
    setBooks([]);
    setLoadedPage(0);
    setIsMoreData(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      title !== titleInputValue ||
      author !== authorInputValue ||
      language !== languageInputValue.toLowerCase() ||
      category !== categoryInputValue
    ) {
      resetSearch();
      setTitle(titleInputValue);
      setAuthor(authorInputValue);
      setLanguage(languageInputValue.toLowerCase());
      setCategory(categoryInputValue);
    }
  };

  useEffect(() => {
    if (title || author || language || category)
      fetchBooks(title, author, language, category, loadedPage, setBooks, setIsMoreData);
  }, [title, author, language, category, loadedPage, setBooks, setIsMoreData]);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchPanel isVisible={true} isAdvancedPanel={false}>
        <FormTextInput
          name="title"
          value={titleInputValue}
          onChange={handleTitleInputChange}
          placeholder="Searched title"
        />
        <ButtonWrapper>
          <Button type="button" onClick={onAdvancedSearchButtonClick}>
            Advanced
          </Button>
          <Button type="submit">Search</Button>
        </ButtonWrapper>
      </SearchPanel>
      <SearchPanel isVisible={isAdvancedSearch} isAdvancedPanel={true}>
        <FormTextInput
          name="author"
          value={authorInputValue}
          onChange={handleAuthorInputChange}
          placeholder="Searched author"
        />
        <FormTextInput
          name="language"
          value={languageInputValue}
          onChange={handleLanguageInputChange}
          placeholder="Country code e.g. en, pl, fr"
        />
        <FormTextInput
          name="category"
          value={categoryInputValue}
          onChange={handleCategoryInputChange}
          placeholder="Searched category"
        />
      </SearchPanel>
    </Form>
  );
};

export default SearchForm;
