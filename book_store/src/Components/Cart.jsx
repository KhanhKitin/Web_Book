import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Navbar from "./Navbar";
import anh1 from "../kido.jpg";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="book">
            {" "}
            {/* dùng lại từ component bookdetail */}
            <Container>
              <Navbar></Navbar>
            </Container>
          </div>
          <div className="contain-cart">
            {" "}
            {/* dùng lại từ component bookdetail */}
            <div className="cart-detail">
              <h5>Giỏ hàng của bạn</h5>
              <div className="row">
                <div className="col-lg-9">
                  <div className="row cart-item-all">
                    <div className="col-lg-3 cart-item-img">
                      <img src={anh1} alt="anh" />
                    </div>
                    <div className="col-lg-6 cart-item-title">
                      <h6>Hey, Kiddo</h6>
                      <p>Jarrett J.Krosoczka</p>
                      <Button outline color="success">
                        Xóa
                      </Button>
                      &nbsp;&nbsp;{" "}
                      <Button outline color="warning">
                        Mua sau
                      </Button>
                    </div>
                    <div className="col-lg-3 cart-item-price">
                      <p>150 000 VNĐ</p>
                    </div>
                  </div>
                  <div className="row cart-item-all">
                    <div className="col-lg-3 cart-item-img">
                      <img src={anh1} alt="anh" />
                    </div>
                    <div className="col-lg-6 cart-item-title">
                      <h6>Hey, Kiddo</h6>
                      <p>Jarrett J.Krosoczka</p>
                      <Button outline color="success">
                        Xóa
                      </Button>
                      &nbsp;&nbsp;{" "}
                      <Button outline color="warning">
                        Mua sau
                      </Button>
                    </div>
                    <div className="col-lg-3 cart-item-price">
                      <p>150 000 VNĐ</p>
                    </div>
                  </div>
                  <div className="row cart-item-all">
                    <div className="col-lg-3 cart-item-img">
                      <img src={anh1} alt="anh" />
                    </div>
                    <div className="col-lg-6 cart-item-title">
                      <h6>Hey, Kiddo</h6>
                      <p>Jarrett J.Krosoczka</p>
                      <Button outline color="success">
                        Xóa
                      </Button>
                      &nbsp;&nbsp;{" "}
                      <Button outline color="warning">
                        Mua sau
                      </Button>
                    </div>
                    <div className="col-lg-3 cart-item-price">
                      <p>150 000 VNĐ</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 pay">
                  <h6>Tạm tính: 150 000 VNĐ</h6>
                  <p>--------------------------------</p>
                  <p>
                    Thành tiền: 150 000 VNĐ
                    <br />
                    (đã bao gồm VAT nếu có)
                  </p>
                  <Button color="danger">Tiến hành thanh toán</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
