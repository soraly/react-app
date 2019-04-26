import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Clock from './doc/thinkReact.4.25'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return <div>
      <Clock promise={$.ajax({url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'})}></Clock>
    </div>

  }
}



export default App;
