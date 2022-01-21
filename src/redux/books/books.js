import { newBook, getBooks, deleteBook } from '../../api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  await newBook(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  await deleteBook(book);
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

export const getAllBooks = () => async (dispatch) => {
  const entries = await getBooks();
  const books = Object.entries(entries).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      item_id: key,
      ...bookEntries,
    };
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    case GET_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
