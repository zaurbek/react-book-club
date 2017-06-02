import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root.jsx';
import configureStore from './store/configureStore';
import initialStore from './store/initialStore';


const store = configureStore(initialStore);

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root'),
);
