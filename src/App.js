import React from 'react';
import PizzaForm from './PizzaForm';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <nav className="navbar">
          <Link to="/">
            <button name = 'homebutton'>Home</button>
            </Link>
          <br/>
          <Link to="/form"> 
          <button name = 'orderbutton'>Order</button>
          </Link>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={PizzaForm} />
        </Switch>
      </div>
    </Router>
  );
};


export default App; 