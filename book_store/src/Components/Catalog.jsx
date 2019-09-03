import React from "react";
import axios from "axios";
import config from "../config";
import ListCatalog from "./ListCatalog";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      catalogs: [] // mảng chứa catalog
    };
  }

  getCatalog = async () => { // hàm lấy các tên thể loại
    let arrayCatalog = [];
    await axios({
      url: `${config.baseUrl}/shop/catalogs`,
      method: `get`
    })
      .then(response => {
        // console.log(response.data)
        response.data.forEach(item => {
          const catalog = {
            id: item.catalog_id,
            catalog_name: item.catalog_name
          };
          arrayCatalog.push(catalog);
        });
      })
      .catch(error => console.log(error));

    this.setState({
      catalogs: arrayCatalog
    });
  }

  async componentDidMount() {
    await this.getCatalog();
  }

  getListCatalog = () => { // hàm render ra danh sách các thể loại
    if (this.state.catalogs) {
      return this.state.catalogs.map((value, key) => {
        return <ListCatalog key={value.id} content={value.catalog_name} />;
      });
    }
  };

  render() {
    return (
      <div className="col-lg-3 category">
        <h5>Category</h5>
        <ul>{this.getListCatalog()}</ul>
      </div>
    );
  }
}
