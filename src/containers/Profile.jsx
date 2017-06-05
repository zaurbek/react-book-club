import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';


const ProfilePage = connect(
  state=>({
    auth: state.auth.value,
    user: state.auth.user
  }),null
)(Profile)


export default ProfilePage;

