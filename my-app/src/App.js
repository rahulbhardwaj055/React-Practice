import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

function App() {
    state = {
        persons: [
            { name:'Max', age: 37 },
            { name:'vansh' , age: 25 },
            { name: 'Rahul' , age:27 }
        ]
    }



    render(){
        return (
            <div className="App">
                <h2>HI this is testing2</h2>
                <h1>HI this is testing</h1>
                <Person name={this.state.persons[0].name} age={this.state.age[0].name}/>
                <Person name={this.state.persons[1].name} age={this.state.age[1].name}> Working in TCS </Person>
                <Person name={this.state.persons[2].name} age={this.state.age[2].name}/>
            </div>
        );

    }
}

export default App;
