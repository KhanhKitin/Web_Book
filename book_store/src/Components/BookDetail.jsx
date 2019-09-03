import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container, Input, Button } from "reactstrap";
import { Rate } from "antd";
import config from "../config";
import axios from "axios";

export default class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}, //chứa book
    };
  }
  handleBuy = () => {
    const mang = this.state.book;
    const book = {
      id: mang.id,
      catalog_id: mang.catalog_id,
      book_name: mang.book_name,
      author: mang.author,
      price: mang.price,
      image: mang.image,
      description: mang.description,
      quantity: mang.quantity
    };
    localStorage.setItem("Books", JSON.stringify(book));
  };

  async componentDidMount() {
    // get bookid
    const pathname = this.props.location.pathname;
    const bookId = pathname.split("/")[pathname.split("/").length - 1];
    // cal ajax
    await axios({
      url: `${config.baseUrl}/shop/books/${bookId}`,
      method: `get`
    })
      .then(response => {
        let path = `${config.baseUrl}/` + response.data.image;
        let infoBook = {
          id: response.data.book_id,
          catalog_id: response.data.catalog_id,
          book_name: response.data.book_name,
          author: response.data.author,
          price: response.data.price,
          image: path,
          description: response.data.description,
          quantity: response.data.quantity
        };

        this.setState({
          book: infoBook
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.book);
    return (
      <div>
        <div className="book">
          <Container>
            <Navbar></Navbar>
          </Container>
        </div>
        <div className="contain-book">
          <div className="book-detail">
            <div className="row">
              <div className="book-image col-lg-3">
                <img src={this.state.book.image} alt="anh"></img>
              </div>
              <div className="col-lg-9 book-title">
                <h5>{this.state.book.book_name}</h5>
                <p>{this.state.book.author}</p>
                <Rate
                  disabled
                  defaultValue={4}
                  style={{ fontSize: "15px", paddingBottom: "10px" }}
                />
                <p>{this.state.book.description}</p>
                <Button
                  color="danger"
                  onClick={() => {
                    this.handleBuy();
                  }}
                >
                  Chọn mua
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9 cmt">
                <Input
                  type="textarea"
                  name="text"
                  style={{ width: "80%" }}
                  placeholder="Nhận xét về cuốn sách này"
                />
                <Button color="info">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
