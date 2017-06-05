import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';

import { userSettings } from '../actions';

const ProfilePage = connect(
  state=>({
    auth: state.auth.value,
    user: state.auth.user
  }),dispatch=>({
    userSettings: (object, history)=>dispatch(userSettings(object, history)),
  })
)(Profile)


export default ProfilePage;

