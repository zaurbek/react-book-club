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

export function githubLogout(history) {
  Cookies.remove('token');
  history.push('/');
  return {
    type: USER_LOGOUT,
  };
}
// ///////////////SERVER LOGIN/////////////////////

const serverFetch = user => axios.post('/api/server/user', user);

export const SERVER_DATA = 'SERVER_DATA';

function serverPlace(userData) {
  return {
    type: SERVER_DATA,
    payload: userData,
  };
}


export const serverLogin = user => (dispatch) => {
  serverFetch(user).then(res => res.data).then((data) => {
    console.log(data);
    if (data.exist && (user.name !== data.data.name) && (user.location !== data.data.location)) {
      return dispatch(serverPlace(data.data));
    }
  });
};


// ======================User Settings=============================

const serverNewInfo = object => axios.post('/api/server/new', object);

export const userSettings = (object, history) => (dispatch) => {
  serverNewInfo(object).then(res => res.data).then((data) => {
    console.log(data);
    history.push('/');
    return dispatch(serverPlace(data));
  });
};


// ==================Search BOOk==================================

export const BOOKS_DATA = 'BOOKS_DATA';

const bookPlace = book => ({
  type: BOOKS_DATA,
  payload: book,
});


export const searchBook = (id, name) => (dispatch) => {
  axios.post('/api/books/add', { bookName: name, id }).then(res => res.data).then((data) => {
    if (data.hasOwnProperty('error')) {
      console.log('error');
    } else {
      return dispatch(bookPlace(data));
    }
  });
};

// ////////////////////BOOK DATA//////////////////////
export const BOOKS_FETCH = 'BOOKS_FETCH';

const serverBooks = data => ({
  type: BOOKS_FETCH,
  payload: data,
});

export const fetchBooks = () => (dispatch) => {
  axios.get('/api/books/all').then(res => res.data).then(data => dispatch(serverBooks(data)));
};

export const TRY_DELETE="TRY_DELETE";

const tryDelete = (id) => ({
  type: TRY_DELETE,
  payload: id   
})

export const deleteBook = id => (dispatch) => {
  dispatch(tryDelete(id));
  axios.post('/api/books/delete', { id }).then(res => res.data).then((data) => {
    console.log(data);
    return dispatch(serverBooks(data));
  });
};

// ===================           ============================
