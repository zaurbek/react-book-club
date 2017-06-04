import React from 'react';
import { connect } from 'react-redux';

import FrontPage from '../components/FrontPage.jsx';


const FrontPageWrapped = connect(
  state=>({
    auth: state.auth.value
  }),null
)(FrontPage);


export default FrontPageWrapped;