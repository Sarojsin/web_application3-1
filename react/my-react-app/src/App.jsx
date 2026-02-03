import React from 'react';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Parent from './components/parent';
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <h1>Welcome to My React App</h1>
        <p>This page uses a self-contained Counter component and a Parent/Child prop-passing example.</p>
        
        <section>
          <h2>Example 1: Self-contained Counter</h2>
          <Counter />
        </section>

        <section>
          <h2>Example 2: Parent/Child Prop Passing</h2>
          <Parent />
        </section>
      </div>
    </>
  );
};

export default App;

