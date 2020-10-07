import React from 'react';
import styled from 'styled-components/macro';
import map from 'lodash/map';

import { Book } from '../../types/books';

import BookListItem from '../BookListItem/BookListItem';

const BookListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => (
  <BookListWrapper>
    {map(books, (book) => (
      <BookListItem key={book.id} bookData={book} />
    ))}
  </BookListWrapper>
);

export default BookList;
