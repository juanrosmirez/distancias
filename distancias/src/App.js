import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import Empleados from './components/Empleados'
import Menu from './components/Menu';

class App extends Component {

  renderEmpleados = () => <h1> Empleados </h1>

  renderMenu = () => <h1> Menu </h1>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <br/>
          <br/> 
          <h1 className="App-title">Aplicativo Indra Distancias</h1>
        </header>
        {/* <Router>
          <div>
            <Switch>
              <Route exact path="/empleados" component={this.renderEmpleados}/>
              <Route exact path="/empleados/menu" component={this.renderMenu}/>
            </Switch>
            {/* <Route path="/menu" component={this.renderMenu}/> */}
          {/* </div> */}
        {/* </Router>  */}
        <Menu />
         <Empleados /> 
      </div>
    );
  }
}

export default App;
