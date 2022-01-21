import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <li key={id} id={id}>
    <p>{title}</p>
    <p>{author}</p>
    <a href="http://localhost:3001/">Remove</a>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
