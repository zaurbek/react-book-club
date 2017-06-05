import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';

import { githubLogin, githubLogout, serverLogin, Loader } from '../actions';


const Root = connect(
  state => ({
    auth: state.auth.value,
    user: state.auth.user,
  }),
  dispatch => ({
    githubLogin: token => dispatch(githubLogin(token)),
    githubLogout: () => dispatch(githubLogout()),
    serverLogin: (user)=>dispatch(serverLogin(user)),
  }))(App);

export default Root;

