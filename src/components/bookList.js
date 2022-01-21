import React from 'react';
import Book from './Book';

const { v4: uuidv4 } = require('uuid');

const BooksList = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
    },
    {
      id: uuidv4(),
      title: 'Lord of The Rings',
      author: 'J. R. R. Tolkien',
    },
    {
      id: uuidv4(),
      title: 'Harry Potter',
      author: 'J.K. Rowling',
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
