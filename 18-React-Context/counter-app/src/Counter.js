import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()
  const {dispatch} = useCount() 
  const {
      state: {count},
    } = useCount()
  return (
    <>
      {/* change 0 with count from context */}
      Count: {count}
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => dispatch({type: 'increment'})} >+</button>
        <button className="count-button" onClick={() => dispatch({type: 'decrement'})}>-</button>
      </div>
    </>
  );
}

export default Counter;