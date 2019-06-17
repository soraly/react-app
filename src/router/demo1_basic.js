import React, { Suspense, Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Movie = React.lazy(() => import('./movies'))

function News() {
    return <div>i am news</div>
}
function Sports() {
    return <div>look at sports,thank you</div>
}
function Home({ match }) {
    console.log(match, 'item')
    return <div>Home,this is Home</div>
}
function Test() {
    var obj = { marginLeft: '10px' }
    return (
        <Router>
            <p>
                <Link to='/' style={obj}>Home</Link>
                <Link to='/news' style={obj}>news</Link>
                <Link to='/sport' style={obj}>sports</Link>
                <Link to='/movie' style={obj}>movies</Link>
            </p>
            <div>
                <Suspense fallback={<div>loading...</div>}>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/movie' component={Movie}></Route>
                    <Route path='/sport' component={Sports}></Route>
                </Suspense>

            </div>
        </Router>
    )
}
class Demo extends Component {
    constructor(){
        super();
    }
    shouldComponentUpdate(nextprop){
        console.log(nextprop,'nextprop');
        return false
    }
    render(){
        return (
            <div>
                React <br/>
                <p>{this.props.name}</p>
                <Test /> 
            </div>
        )
    }
}   
export default Demo