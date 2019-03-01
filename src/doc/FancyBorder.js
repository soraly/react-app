import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div>
        <FancyBorder color='red'>
            <h2>welcome</h2>
        </FancyBorder>
      </div>
    )
  }
}

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  
function FancyBorder(props){
    return <div className={'big ' + props.color}>{props.children}</div>
}
export default Welcome
