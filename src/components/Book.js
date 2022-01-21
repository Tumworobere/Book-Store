import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (

    <div key={book.item_id}>
      <p>{book.category}</p>
      <p>{book.title}</p>
      <button type="submit" onClick={() => { deleteBook(book); }}>Remove</button>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
