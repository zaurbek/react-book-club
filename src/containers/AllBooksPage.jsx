import React from 'react';
import { connect } from 'react-redux';
import AllBooks from '../components/AllBooksPage.jsx';

import { tradeBook, denyTrade, confirmTrade } from '../actions';

const AllBooksPage = connect(
  state => ({
    auth: state.auth.value,
    id: state.auth.user.id,
    books: state.book.items
  }), dispatch => ({
    tradeBook: (bookID, userID) => dispatch(tradeBook(bookID, userID)),
    confirmTrade: (newOwner, id)=>dispatch(confirmTrade(newOwner, id)),
    denyTrade: (id)=>dispatch(denyTrade(id)),
  }),
)(AllBooks);

export default AllBooksPage;
