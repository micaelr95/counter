import React from 'react';
import { connect } from 'react-redux';

import Button from './components/Button';
import Value from './components/Value';
import { incrementAction, decrementAction } from './actions';

const App = ({ counter, dispatch }) => {
  const increment = () => dispatch(incrementAction);
  const decrement = () => dispatch(decrementAction);

  return (
    <div>
      <Value value={counter} number={1} />
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({ counter });

export default connect(mapStateToProps)(App);
