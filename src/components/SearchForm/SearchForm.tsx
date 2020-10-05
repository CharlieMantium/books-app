import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" value={titleInputValue} onChange={handleChange} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
