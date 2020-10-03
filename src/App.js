import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navigation from "./Containers/Navigation";
import Homepage from "./Section/Homepage";
import Services from "./Section/Services";
import Shop from "./Section/Shop";
import ShoppingCart from "./Section/ShoppingCart";
import Login from "./Section/Login";
import Chat from "./Section/Chat";

import { Switch, Route, Link } from "react-router-dom";

import FooterContainer from "./Containers/FooterContainer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/services">
        <Services />
      </Route>

      <Route exact path="/shop">
        <Shop />
      </Route>

      <Route exact path="/auth">
        <Login />
      </Route>

      <Route exact path="/cart">
        <ShoppingCart />
      </Route>

      <Route path="/chat">
        <Chat />
      </Route>

      <FooterContainer />
    </div>
  );
}

export default App;
