import React from 'react';
import styled from 'styled-components/macro';

const BookListWrapper = styled.ul``;

const BookListItem = styled.li``;

interface BookListProps {}

const BookList: React.FC<BookListProps> = () => (
  <BookListWrapper>
    <BookListItem>Title: YEAH!</BookListItem>
  </BookListWrapper>
);

export default BookList;
