import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore=(initialStore)=> {
    const store = createStore(rootReducer, initialStore, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
    return store;
}


export default configureStore;