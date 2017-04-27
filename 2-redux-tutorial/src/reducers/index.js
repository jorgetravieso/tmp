import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-books';

//every key ends up as a new key in the global state
const rootReducer = combineReducers({
  books: BooksReducer,  //BooksReducer is responsible for the books property
  activeBook: ActiveBook
});

export default rootReducer;
