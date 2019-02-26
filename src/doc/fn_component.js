 /**
  * 用函数定义组件
  * @usage  
  */
import React,{Component} from 'react'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting(props) {
return <h1>Please sign up.</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class Test extends Component {
    render(){
       return <div>
           <Greeting isLoggedIn={this.props.isLoggedIn}></Greeting>
       </div>
    }
    componentWillMount(){
        console.log(this.props)
    }
   
}

export default Test

