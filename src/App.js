import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Clock from './doc/todoList/demo1'
import $ from 'jquery'
import EventEmitter  from 'events'

// class MyEmitter extends EventEmitter {
//   test(){
//     console.log('hehe')
//   }
//   constructor(args){
//     super();
//     console.log(args,'args');
//     this.name = args.name;
//     this.value = 'val..'
//   }
// }


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

    }
  }

  render() {

    return <div>
      <Clock promise={$.ajax({url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'})}></Clock>
    </div>

  }
}



export default App;
