
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

const initialState = [
  'Message',
  'Message'
];

function sendMessagge(state = initialState, action: any) {
  if (action.type === 'ADD_MESSAGE') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(sendMessagge, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
