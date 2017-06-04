import axios from 'axios';
import Cookies from 'js-cookie';


// /////////LOGIN//////////////

function githubFetch(token) {
  return axios.get(`https://api.github.com/user?access_token=${token}`);
}

export const USER_DATA = 'USER_DATA';

function githubPlace(userData) {
  return {
    type: USER_DATA,
    payload: userData,
  };
}


export function githubLogin(token) {
  return dispatch => githubFetch(token).then(res => res.data).then((data) => {
    console.log(data);
    return dispatch(githubPlace(data));
  });
}

// /////////////LOGOUT/////////////////////
export const USER_LOGOUT = 'USER_LOGOUT';

export function githubLogout() {
  Cookies.remove('token');
  return {
    type: USER_LOGOUT,
  };
}
