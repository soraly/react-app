import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext('blue');
var color = React.createContext('bluesky');

class App extends Component {
    static contextType = color
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.context,'cc')  
    }
    render() {
        return (
            <Provider>
                    <Page />
                </Provider>
        )
    }
}
//或者写成  App.contextType = color 

class Page extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <Dialog />
            </div>
        )
    }
}
class Dialog extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.context, 'this.context')
    }
    render() {
        return (
            <div>
                <Consumer>
                    {
                        value =>{
                            return <div>
                                my color is : {value}
                            </div>
                        }
                    }
                </Consumer>
            </div>
        )
    }
}
class Avatar extends Component {
    constructor(){
        this.state = {
            name: 'xiang',
            age: ''
        }
    }
}
export default App