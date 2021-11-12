import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
    <Header />
      <Switch>
        <Route path="/checkout">
   
      <Checkout />
      </Route>
      <Route exact path="/">
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
