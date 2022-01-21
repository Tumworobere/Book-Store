import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './Book';
import InputBook from './inputBook';

const BooksList = () => {
  const dispatch = useDispatch();
  const { booksReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (

    <div>
      {booksReducer.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
      <InputBook />
    </div>

  );
};

export default BooksList;
