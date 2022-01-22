import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const { v4: uuidv4 } = require('uuid');

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setInputTitle] = useState('');
  const [category, setInputCategory] = useState('');

  const onTitleChange = (e) => setInputTitle((e.target.value));
  const onCategoryChange = (e) => setInputCategory((e.target.value));

  const handleSubmit = (e) => {
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(book));
    e.preventDefault();
    setInputTitle('');
    setInputCategory('');
  };

  return (
    <div className="input_div">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" value={title} onChange={onTitleChange} required />
        <select
          onChange={onCategoryChange}
          name="categories"
          id="booksCategories"
        >
          <option disabledvalue="default">Select a category</option>
          <option className="otherops" value="Action">Action</option>
          <option className="otherops" value="Biography">Biography</option>
          <option className="otherops" value="Heroes">Heroes</option>
          <option className="otherops" value="Drama">Drama</option>
          <option className="otherops" value="Science Fiction">Science Fiction</option>
          <option className="otherops" value="Horror">Horror</option>
          <option className="otherops" value="Fantasy">Fantasy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
