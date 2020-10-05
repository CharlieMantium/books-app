import React from 'react';
import styled from 'styled-components/macro';
import map from 'lodash/map';

import { Book } from '../../types/books';

const BookListWrapper = styled.ul``;

const BookListItem = styled.li``;

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => (
  <BookListWrapper>
    {map(books, (book) => (
      <BookListItem>
        <img src={book.cover} alt={`${book.title} books cover.`} />
        Title: {book.title}
        <p>{book.description}</p>
      </BookListItem>
    ))}
  </BookListWrapper>
);

export default BookList;
