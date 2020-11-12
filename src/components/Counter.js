import React from 'react';

import { connect } from 'react-redux';

import {
  increment,
  decrement,
} from '../redux/actions/counter';

function Counter(props) {
  return (
    <div className="App">
      <div>Count: <div className='count'>{props.count}</div></div>

      <button onClick={() => props.increment()}>Increment</button>

      <button onClick={() => props.decrement()}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),

  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);