import React from 'react';
import { connect } from 'react-redux';
import MyBooks from '../components/MyBooksPage.jsx';

import { searchBook } from '../actions';

const MyBooksPage = connect(
  state => ({
    auth: state.auth.value,
    id: state.auth.user.id,
  }), dispatch => ({
    searchBook: (id, name) => dispatch(searchBook(id, name)),
  }),
)(MyBooks);

export default MyBooksPage;
