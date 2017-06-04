import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';

import { githubLogin, githubLogout, searchLocation, Loader } from '../actions';


const Root = connect(
  state => ({
    auth: state.auth.value,
    user: state.auth.user,
  }),
  dispatch => ({
    githubLogin: token => dispatch(githubLogin(token)),
    githubLogout: () => dispatch(githubLogout())
  }))(App);

export default Root;