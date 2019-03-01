import React, { Component } from "react";
import FormComponent from "./component";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const data = [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];
    const dataGoods = data.filter(data => data.category == "Sporting Goods");
    const dataElectronics = data.filter(data => data.category == "Electronics");
    this.state.data.push(dataGoods);
    this.state.data.push(dataElectronics);
    this.setState({
      data: this.state.data
    });
    console.log(this.state.data)
  }
  render() {
    const { data } = this.state;
    console.log("data", data.length);
    return (
      <div className="App">
        <div>
          <div>
            <input placeholder="Search" />
          </div>
          <div>
            <input type="checkbox" />
            xxxxxxxx
          </div>
          {data.length > 0 && <FormComponent data={data} />}
        </div>
      </div>
    );
  }
}

export default App;
