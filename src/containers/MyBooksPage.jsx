import React from 'react';
import { connect } from 'react-redux';
import MyBooks from '../components/MyBooksPage.jsx';

import { searchBook, deleteBook, denyTrade, confirmTrade } from '../actions';

const MyBooksPage = connect(
  state => ({
    auth: state.auth.value,
    id: state.auth.user.id,
    books: state.book.items
  }), dispatch => ({
    searchBook: (id, name) => dispatch(searchBook(id, name)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    confirmTrade: (newOwner, id)=>dispatch(confirmTrade(newOwner, id)),
    denyTrade: (id)=>dispatch(denyTrade(id)),
  }),
)(MyBooks);

export default MyBooksPage;
