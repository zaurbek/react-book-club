import React from 'react';
import { connect } from 'react-redux';

import TopMenu from '../components/TopMenu.jsx';
import { githubLogout } from '../actions';

const Top = connect(
  state=>({
    auth: state.auth.value,
    user: state.auth.user
  }),dispatch=>({
    githubLogout: ()=>dispatch(githubLogout())
  })
)(TopMenu);



export default Top;






