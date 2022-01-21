import React from 'react';
import Book from './Book';

const { v4: uuidv4 } = require('uuid');

const BooksList = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Lord of The Rings',
      author: 'J. R. R. Tolkien',
    },
    {
      id: uuidv4(),
      title: 'Alice in WonderLand',
      author: 'Lewis Carroll',
    },
  ];

  return (

    <ul>
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>

  );
};

export default BooksList;
