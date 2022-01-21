import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';
import InputBook from './inputBook';

const { v4: uuidv4 } = require('uuid');

const BooksList = () => {
  const [books, setBooks] = useState(store.getState().booksReducer);
  const dispatch = useDispatch();

  const submitBookToStore = ({ title, author }) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));

    localStorage.setItem('BooksList', JSON.stringify(store.getState().booksReducer));
    setBooks(JSON.parse(localStorage.getItem('BooksList')));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));

    localStorage.setItem('BooksList', JSON.stringify(store.getState().booksReducer));
    setBooks(JSON.parse(localStorage.getItem('BooksList')));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            deleteBook={() => deleteBook(book)}
          />
        ))}
      </ul>

      <InputBook addBook={submitBookToStore} />
    </div>

  );
};

export default BooksList;
