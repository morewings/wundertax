import React from 'react';
import PropTypes from 'prop-types';
import { useGetAuthorName } from './../../features/library';
import './Item.css';

const Item = ({ isbn, email, publishedAt, title }) => {
  const authorName =  useGetAuthorName(email)
  return (
    <dl className="item">
      <dt>Author(s)</dt>
      <dd>{authorName}</dd>

      <dt>Email(s)</dt>
      <dd>{email}</dd>

      <dt>ISBN</dt>
      <dd>{isbn}</dd>

      <dt>Published at</dt>
      <dd>{publishedAt}</dd>

      <dt>Title</dt>
      <dd>{title}</dd>
    </dl>
  )
}

Item.propTypes = {
  isbn: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  publishedAt: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Item.defaultProps = {
  publishedAt: 'unknown'
}

export default Item;
