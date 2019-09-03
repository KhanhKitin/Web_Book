import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { withRouter } from 'react-router-dom';


class CardBook extends Component {
  getTest = idbook => {
    this.props.history.push(`/shop/books/${idbook}`);
  };
  render() {
    return (
      <Card
        className="content-main"
        onClick={() => {
          this.getTest(this.props.book_id);
        }}
      >
        <CardImg
          className="content-img"
          top
          width="100%"
          src={this.props.image}
          alt="Card image cap"
        />
        <CardBody style={{ backgroundColor: "#343A40", color: "#ddd7d7" }}>
          <CardTitle>{this.props.book_name}</CardTitle>
          <CardSubtitle>Giá: {this.props.price} VNĐ</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(CardBook);