import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
    }
    render() {
        //将子组件Avatar和直接关联的父组件解耦, 只有最顶部的 Page组件需要把name和age传递给Avatar，中间组件不用传值
        var userInfo = (
            <Avatar name={this.props.name} age={this.props.age}  />
        );
        return (
            <Page userInfo={userInfo} />
        )
    }
}
class Page extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <Dialog userInfo={this.props.userInfo}/>
            </div>
        )
    }
}
class Dialog extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
    }
    render() {
        
        return (
            <div>   
                <Profile userInfo={this.props.userInfo} />
            </div>
        )
    }
}
class Profile extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>   
                {this.props.userInfo}
            </div>
        )
    }
}

// 这种对组件的控制反转减少了在你的应用中要传递的 props 数量，这在很多场景下会使得你的代码更加干净，使你对根组件有更多的把控。
//但是，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，并且会强行将低层组件适应这样的形式，不一定适合你
class Avatar extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
            </div>
        )
    }
}
export default App