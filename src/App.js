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
import CreateServices from "./Section/CreateServices";
import ServiceItem from "./Components/ServiceItem";

import { Switch, Route, Link } from "react-router-dom";

import FooterContainer from "./Containers/FooterContainer";
import ForgotPassword from "./Section/ForgotPassword";
import ChangePassForm from "./Section/ChangePassForm";

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

      <Route
        path="/services/:id"
        render={(props) => <ServiceItem {...props} />}
      />

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

      <Route exact path="/reset_password">
        <ForgotPassword />
      </Route>

      <Route
        path="/reset_password/:id/:token"
        // component={ChangePassForm}
        render={({ match }) => (
          <ChangePassForm userId={match.params.id} token={match.params.token} />
        )}
      />

      <Route exact path="/create_service">
        <CreateServices />
      </Route>

      {/* <FooterContainer /> */}
    </div>
  );
}

export default App;
