import React, { useState, useEffect } from 'react';
import { filter, includes } from 'lodash/fp';
import { useSetLibraryData, useGetItemList } from './../../features/library'
import Item from './../Item';
import authors from './../../../data/authors.csv';
import books from './../../../data/books.csv';
import magazines from './../../../data/magazines.csv';

const List = () => {
  useSetLibraryData({ authors, books, magazines });
  const itemList = useGetItemList();
  const [items, setItems] = useState(itemList);
  const [emailFilter, setEmailFilter] = useState('');
  const handleChange = (e) => {
    setEmailFilter(e.target.value)
  }
  const handleFilter = () => {
    const filteredItems = filter(({ authors }) => includes(emailFilter, authors), items)
    setItems(filteredItems)
  }
  useEffect(() => {
    setItems(itemList)
  }, [itemList]);
  return (
    <div>
      <fieldset>
        <label htmlFor="filter">Filter by email: </label><br />
        <input onChange={handleChange} value={emailFilter} id="filter" type="text"/><br />
        <button onClick={handleFilter} type="button">Filter</button>
      </fieldset>
      {items.map(({ isbn, publishedAt, title, authors: email }) => (
        <Item email={email} title={title} publishedAt={publishedAt} isbn={isbn} key={isbn} />
      ))}
    </div>
  )
}

export default List;
