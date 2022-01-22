import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const percentage = 40;
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (

    <div className="bookContain" key={book.item_id}>
      <div className="bookInfo">
        <p className="category">{book.category}</p>
        <h3 className="bookName">{book.title}</h3>
        <p className="author">The Author</p>
        <div className="btns">
          <button type="submit" className="infoBtns">Comment</button>
          <button type="submit" className="infoBtns" onClick={() => { deleteBook(book); }}>Remove</button>
          <button type="submit" className="infoBtns">Edit</button>
        </div>
      </div>
      <div className="progress-w-chap">
        <div className="progwithtxt">
          <div className="progress">
            <CircularProgressbar value={percentage} />
          </div>
          <div className="progressTXT">
            <h3 className="percentage">
              {percentage}
              %
            </h3>
            <p>completed</p>
          </div>
        </div>
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <h3>Chapter 72</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
