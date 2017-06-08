import React from 'react';
import { connect } from 'react-redux';
import MyBooks from '../components/MyBooksPage.jsx';

import { searchBook, deleteBook } from '../actions';

const MyBooksPage = connect(
  state => ({
    auth: state.auth.value,
    id: state.auth.user.id,
    books: state.book.items,
    userID: state.auth.user.id
  }), dispatch => ({
    searchBook: (id, name) => dispatch(searchBook(id, name)),
    deleteBook: (id) => dispatch(deleteBook(id)),
  }),
)(MyBooks);

export default MyBooksPage;
