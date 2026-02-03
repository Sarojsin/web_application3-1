import React from 'react';

const Child = ({ name, grade }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '5px' }}>
      <h4>Child Component</h4>
      <p>Name: {name}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default Child;

