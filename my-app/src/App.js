import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
        <h2>HI this is testing2</h2>

        <h1>HI this is testing</h1>
        <Person name="Vansh" age="25"/>
        <Person name="chirag" age="25.5"> Working in TCS </Person>
        <Person name="Rahul" age="27"/>
    </div>
  );
}

export default App;
