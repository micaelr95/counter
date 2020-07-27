import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
