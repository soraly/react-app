 /**
  * 有状态组件（条件渲染）
  * 与运算符 &&
  * @usage  
  */
 import React,{Component} from 'react'
 import Greeting from './fn_component'

 function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  function Warning(props){
      if(props.hide){
          return null
      }else {
          return <div>warning!!!</div>
      }
  }
 class LoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            fruits: ['apples','orange','banane']
        };
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
        
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true, fruits:[]})
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick.bind(this)} />;
        }

        return (
            <div>
                <Warning hide = {this.state.isLoggedIn} />
                <Greeting isLoggedIn = {this.state.isLoggedIn} />
                {button}
                <div>{
                    this.state.fruits.length >0 && <div>a lot of fruits!!!</div>
                }</div>
                <p> 我  {this.state.fruits.length?'有':'没有'}水果</p>
            </div>
        )
    }
 }

 export default LoginControl