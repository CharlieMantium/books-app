import React from 'react';
import styled from 'styled-components/macro';
import InfiniteScroll from 'react-infinite-scroll-component';
import map from 'lodash/map';
import { rem } from 'polished';

import { Book } from '../../types/types';

import BookListItem from '../BookListItem/BookListItem';
import Loader from '../Loader/Loader';

const BookListWrapper = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
`;

const InfiniteScrollMessage = styled.li`
  width: 100%;
  height: ${rem(20)};
  text-align: center;
`;

interface BookListProps {
  books: Book[];
  incrementPageNumber: () => void;
  isMoreData: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, incrementPageNumber, isMoreData }) => (
  <BookListWrapper>
    <StyledInfiniteScroll
      dataLength={books.length}
      next={incrementPageNumber}
      hasMore={isMoreData}
      loader={<Loader />}
      endMessage={<InfiniteScrollMessage>That's all Folks!</InfiniteScrollMessage>}
      hasChildren={true}
    >
      {map(books, (book) => (
        <BookListItem key={book.id} bookData={book} />
      ))}
    </StyledInfiniteScroll>
  </BookListWrapper>
);

export default BookList;
