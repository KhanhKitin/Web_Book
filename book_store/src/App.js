import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import BookDetail from "./Components/BookDetail";
import Cart from "./Components/Cart";
import Login from "./Components/Login";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact={true}
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route path="/home" component={Home} />
        <Route path="/shop/books/:id" component={BookDetail}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
      </BrowserRouter>
    );
  }
}
