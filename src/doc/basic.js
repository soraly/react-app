import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';

class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      inpVal: '请输入事例'
    }
  }
  componentWillMount(){
    console.log('start');
  }
  componentDidMount() {
   console.log(this.refs.dom_h1);
  }
  tick(){
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element,document.getElementById('root'),()=>{
      console.log('render done...')
    })
  }
  
  Comment(props) {
   
    function formatDate(date){
      date.toLocaleTimeString();
    }
    
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={props.author.avatarUrl}
               alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  render() {
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

    function Avatar(props) {
      return (
        <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    
      );
    }

    function UserInfo(props) {
      return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div> 
      );
    }

    function CommentText(props) {
      return (
        <div className="Comment-text">
          {props.text}
        </div>
    
      );
    }

    function formatDate(date){
      date.toLocaleTimeString();
    }

    function CommentDate(props) {
      return (
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
    
      );
    }

    return (
      <div className="todolist">
      
      <this.Comment author={comment.author} text={comment.text} date={comment.date} />

      <div className="Comment">
        <UserInfo user={comment.author} />
        <CommentText text={comment.text} />
        <CommentDate date={comment.date} />
      </div>


       <this.Welcome name='北京' />
       <this.Welcome name='欢迎' />
       <this.Welcome name='你们' />
       <this.Welcome name='' />
        <List data={this.state.list} />
        <form>
          <input value={this.state.inpVal} onChange={this.handleInput.bind(this)} type='text'/> <br/>
          <button onClick={this.handleButton.bind(this)}>click me to add </button>
        </form>
      </div>
    );
  }
  Welcome(props){
    if(props.name){
      return <h2>this is h2 {props.name}</h2>
    }else {
      return <h3>this is h3,none...</h3>
    }
  }
  getDom(props){
    console.log(props)
    if(props){
      return <h2>this is h2</h2>
    }else {
      return <h3>this is h3</h3>
    }
  }
  handleInput(event){
    this.setState({
      inpVal: event.target.value
    })
  }
  resetInput(){
    this.setState({
      inpVal: ''
    })
  }
  handleButton(event){
    event.preventDefault();
    if(!this.state.inpVal){
      alert('请输入值');
      return;
    }
    this.state.list.push({name: this.state.inpVal})
    this.setState({
      list: this.state.list
    })
    this.resetInput()
  }
}

class List extends Component {
  render(){
    return (
      <ul>
        {this.props.data.map((item,index)=>{
         return <li key={index}>{item.name}</li>
        })}
      </ul>
    )
  }
}

export default CommentApp;
