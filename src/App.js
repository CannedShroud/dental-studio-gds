import React from "react";
import "./Styles/App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/beforeafter">{/* B and A */}</Route>
          <Route path="/testimonials">{/* Testimonials Page */}</Route>
          <Route path="/about">{/* About Us */}</Route>
          <Route path="/services">{/* Treatments offerred */}</Route>
          <Route path="/contact">{/* Contact Us */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
