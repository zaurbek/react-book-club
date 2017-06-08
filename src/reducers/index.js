import { combineReducers } from 'redux';
import auth from './authReducer';
import book from './bookReducer';



export default combineReducers({
    auth,
    book
});