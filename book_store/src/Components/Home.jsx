import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import Category from "./Catalog";
import Content from "./Content";
import Search from "./Search";
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar />
        </Container>
        <div className="Banner"></div>
        <div className="search">
          <Search></Search>
        </div>
        <Container className="wraper mt-5">
          <div className="row">
            <Content />
            <Category />
          </div>
        </Container>
      </div>
    );
  }
}
export default withRouter(Home);
