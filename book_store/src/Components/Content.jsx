import React, { Component } from "react";
import CardBook from "./CardBook";
import axios from "axios";
import config from "../config";


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [] // mảng chứa book
    };
  }

  getBook = async () => { // hàm lấy các tên thể loại
    let arrayBook = [];
    await axios({
      url: `${config.baseUrl}/admin/books`,
      method: `get`
    })
      .then(response => {
        // console.log(response.data)
        response.data.forEach(item => {
          let path = `${config.baseUrl}/` + item.image;
          const book = {
            id: item.book_id,
            catalog_id: item.catalog_id,
            book_name: item.book_name,
            author: item.author,
            price: item.price,
            image: path,
            description: item.description,
            quantity: item.quantity
          };
          arrayBook.push(book);
        });
      })
      .catch(error => console.log(error));

    this.setState({
      books: arrayBook
    });
  };

  async componentDidMount() {
    await this.getBook();
  }

  getListBook = () => {
    // hàm render ra danh sách sách
    console.log(this.state.books);
    if (this.state.books) {
      return this.state.books.map(value => {
        return (
          <CardBook
            key={value.id}
            book_id={value.id}
            book_name={value.book_name}
            price={value.price}
            image={value.image}
          />
        );
      });
    }
  };

  render() {
    return (
      <div className="col-lg-9 content">
        <div className="row detail-content">{this.getListBook()}</div>
      </div>
    );
  }
}
