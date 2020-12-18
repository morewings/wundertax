import React from 'react';
import { useSetLibraryData, useGetItemList } from './../../features/library'
import Item from './../Item';
import authors from './../../../data/authors.csv';
import books from './../../../data/books.csv';
import magazines from './../../../data/magazines.csv';

const List = () => {
  useSetLibraryData({ authors, books, magazines });
  const itemList = useGetItemList();
  return (
    <div>{itemList.map(({ isbn, publishedAt, title, authors: email }) => (
      <Item email={email} title={title} publishedAt={publishedAt} isbn={isbn} key={isbn} />
    ))}</div>
  )
}

export default List;
