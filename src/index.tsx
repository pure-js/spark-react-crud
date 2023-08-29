import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { getRoutes } from './routes';
import './index.css';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <>
    <Provider store={store}>{getRoutes()}</Provider>
  </>,
  document.getElementById('root'),
);
