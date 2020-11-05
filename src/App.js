//import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Checkout from "./Checkout";

import './App.css';
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;