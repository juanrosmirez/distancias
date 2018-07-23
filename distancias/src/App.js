import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Empleados from './components/Empleados'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Empleados/>
      </div>
    );
  }
}

export default App;
