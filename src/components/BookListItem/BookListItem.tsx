import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors, screenSizes } from '../../styles/base';
import { Book } from '../../types/books';

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

  @media (min-width: ${screenSizes.largeMobile}) {
    padding: ${rem(10)};
  }

  @media (min-width: ${screenSizes.largeMobile}) {
    padding: ${rem(20)};
  }
`;

const BookTitle = styled.h2`
  margin: 0;
  text-align: center;
  word-wrap: break-word;
  color: ${colors.gamma};
`;

const BookDescription = styled.p<{
  isDescription: boolean;
}>`
  margin: 0;
  text-align: ${({ isDescription }) => isDescription && 'center'};
  word-wrap: break-word;
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
      <BookTitle>{bookData.title}</BookTitle>
      <CoverWrapper>
        <StyledImg src={bookData.cover} alt={`"${bookData.title}" books cover.`} />
      </CoverWrapper>
      {bookData.description ? (
        <BookDescription
          isDescription={false}
          dangerouslySetInnerHTML={{ __html: bookData.description }}
        />
      ) : (
        <BookDescription isDescription>No description</BookDescription>
      )}
    </BookListItemContentWrapper>
  </BookListItemWrapper>
);

export default BookListItem;
