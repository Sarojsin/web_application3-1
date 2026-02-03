import React, { useState } from 'react';
import Child from './child';
import Child1 from './child1';
import Child2 from './child2';

const Parent = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => {
        setCount(count + 1);
    };
    const onDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    
    const students = ["saroj", "ram", "shyam"];

    return (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
            <h3>Parent Component</h3>
            <p>Count from Parent: {count}</p>
            <Child1 onIncrement={onIncrement} count={count} />
            <Child2 students={students} />
            <Child name="saroj" grade="10th" />
            <button onClick={onIncrement}>Increment from Parent</button>
            <button onClick={onDecrement}>Decrement from Parent</button>
            
            <h4>Students List:</h4>
            <ul>
                {students.map((student) => (
                    <li key={student}>{student}</li>
                ))}
            </ul>
        </div>
    );
};

export default Parent;

