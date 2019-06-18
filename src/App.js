import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Clock from './learn/refs'
import $ from 'jquery'
import EventEmitter  from 'events'

const emitter = new EventEmitter({name:'xiang'});

emitter.on('uploaddone',function(a,b){
  //console.log(a,b,this);
  //this.test()
})

emitter.emit('uploaddone','xixi','haha')

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'xiang'
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name: 'xiaoff'
      })
    }, 2000)
  }
  render() {
    
    return <div>
      <Clock name={this.state.name} promise={$.ajax({url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'})}></Clock>
    </div>
  }
}



export default App;
