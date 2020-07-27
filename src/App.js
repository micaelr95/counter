import React from 'react';
import { connect } from 'react-redux';

import Button from './components/Button';
import Value from './components/Value';
import { incrementAction, decrementAction } from './actions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = ({ counter, dispatch }) => {
  const increment = () => dispatch(incrementAction);
  const decrement = () => dispatch(decrementAction);

  return (
    <Container>
      <Content>
        <Value value={counter} number={1} />
        <div style={{ padding: 20 }}>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
        </div>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ counter }) => ({ counter });

export default connect(mapStateToProps)(App);
