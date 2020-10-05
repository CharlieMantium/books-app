import React from 'react';
import styled from 'styled-components/macro';

import { Book } from '../../types/books';

const BookListItemWrapper = styled.li``;

const BookTitle = styled.h2``;

const BookDescription = styled.p``;

const BookImage = styled.img``;

interface BookListItemProps {
  bookData: Book;
}

const BookListItem: React.FC<BookListItemProps> = ({ bookData }) => (
  <BookListItemWrapper>
    <BookImage src={bookData.cover} alt={`${bookData.title} books cover.`} />
    <BookTitle>{bookData.title}</BookTitle>
    <BookDescription>{bookData.description}</BookDescription>
  </BookListItemWrapper>
);

export default BookListItem;
