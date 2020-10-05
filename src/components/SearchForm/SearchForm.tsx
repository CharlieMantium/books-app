import React from 'react';

interface SearchFormProps {
  title: string;
  setTitle: (title: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ title, setTitle }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  return (
    <form>
      <label>
        Title
        <input type="text" value={title} onChange={handleChange} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
