import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors, screenSizes } from '../../styles/base';
import { Book } from '../../types/types';

const BookListItemWrapper = styled.li`
  display: flex;
  width: 100%;

  @media (min-width: ${screenSizes.rotatedMobile}) {
    width: 50%;
  }

  @media (min-width: ${screenSizes.largeMobile}) {
    width: 33%;
  }
`;

const BookListItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${rem(10)} 0;
  padding: ${rem(20)};
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};

  @media (min-width: ${screenSizes.rotatedMobile}) {
    margin: ${rem(10)};
  }
`;

const BookTitle = styled.h2`
  margin: 0;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  color: ${colors.gamma};
`;

const BookDescription = styled.p`
  margin: 0;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

const CoverWrapper = styled.div`
  height: ${rem(150)};
  margin: ${rem(20)} auto;
`;

const StyledImg = styled.img`
  max-height: 100%;
  min-height: ${rem(150)};
`;

interface BookListItemProps {
  bookData: Book;
}

const BookListItem: React.FC<BookListItemProps> = ({ bookData }) => (
  <BookListItemWrapper>
    <BookListItemContentWrapper>
      <BookTitle data-testid="book-title">{bookData.title}</BookTitle>
      <CoverWrapper data-testid="book-covert-wrapper-div">
        <StyledImg src={bookData.cover} alt={`"${bookData.title}" book cover`} data-testid="book-cover-img"/>
      </CoverWrapper>
      {bookData.description ? (
        <BookDescription dangerouslySetInnerHTML={{ __html: bookData.description }} data-testid="book-description-from-api"/>
      ) : (
        <BookDescription data-testid="book-description-replacement">No description</BookDescription>
      )}
    </BookListItemContentWrapper>
  </BookListItemWrapper>
);

export default BookListItem;
