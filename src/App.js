import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Clock from './doc/multipleInput'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return <div>
      <Clock increment='10' hello=''></Clock>
    </div>

  }
}




export default App;
