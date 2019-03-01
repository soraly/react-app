import React, { Component } from "react";

export default class FromComponent extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Name</h1>
          <h1>Price</h1>
        </header>
        <content>
          {this.props.data.map(data => {
            return data.map((value, index) => {
              if (index == 0) {
                return (
                  <div key={index}>
                    <h2>{value.category}</h2>
                    <div className="value">
                      <span>{value.name}</span>
                      <span>{value.price}</span>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <div className="value">
                      <span>{value.name}</span>
                      <span>{value.price}</span>
                    </div>
                  </div>
                );
              }
            });
          })}
        </content>
      </div>
    );
  }
}
