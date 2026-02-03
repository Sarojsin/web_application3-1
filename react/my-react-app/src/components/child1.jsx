import React from 'react';

const Child1 = ({ count, onIncrement }) => {
  return (
    <div style={{ border: '1px dotted blue', margin: '5px' }}>
      <h4>Child1 Component</h4>
      <p>Received Count: {count}</p>
      <button onClick={onIncrement}>Increment from Child1</button>
    </div>
  );
};

export default Child1;
