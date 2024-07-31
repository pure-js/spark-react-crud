import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import reducers from './reducers';
import { getRoutes } from './routes';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <>
    <Provider store={store}>{getRoutes()}</Provider>
  </>,
  document.getElementById('app'),
);
