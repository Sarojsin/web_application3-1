import React from 'react';

const Child2 = ({ students }) => {
  return (
    <div style={{ border: '1px dotted green', margin: '5px' }}>
      <h4>Child2 Component</h4>
      <p>Number of students: {students ? students.length : 0}</p>
    </div>
  );
};

export default Child2;
