import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function News(){
    return <div>i am news</div>
}
function Sports(){
    return <div>look at sports,thank you</div>
}
function Home({match}){
    console.log(match,'item')
    return <div>Home,this is Home</div>
}
function Test(){
    var obj = {marginLeft: '10px'}
    return (
        <Router>
            hello
            <p>
                <Link to='/' style={obj}>Home</Link>
                <Link to='/news' style={obj}>news</Link>
                <Link to='/sport' style={obj}>sports</Link>
            </p>
            <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/news' component={News}></Route>
                <Route path='/sport' component={Sports}></Route>
            </div>
        </Router>
    )
}

export default Test