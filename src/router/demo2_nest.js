import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'

function News(){
    return <div>i am news</div>
}
function Sport({match}){
    return <div>i like to play{match.params.name}</div>
}
function Sports({match}){
    return <div>
        <header>
            <Link to='/sport/basketball' style={{marginRight: 20}}>basketball</Link>
            <Link to= {`${match.url}/football`}>football</Link>

            <Route path={`${match.url}/:name`}  component={Sport}></Route>
            <Route path={`${match.url}`} exact render={()=><p>choose a sport</p>}></Route>
        </header>
    </div>
}

function Basketball(){
    return <p>i like to play Basketball</p>
}

function Home({match}){
    return <div>Home,this is Home</div>
}
function Games(props){
    return <div>i have many games, such as {props.name}</div>
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
                <NavLink to='/games' activeClassName='active' style={obj}>games</NavLink>
            </p>
            <div>
            <Switch> 
                
                <Route path='/' exact component={Home}></Route>
                <Route path='/news' component={News}></Route> 
                <Route path='/sport' component={Sports}></Route>
                <Route path='/games' render={props=><Games {...props} name='Nintendo games' />}></Route>
                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={NoMatch}></Route>
            </Switch>
            <Redirect to='/sport' />
            </div>
        </Router>
    )
}
function NoMatch(){
    return <div>这里么有东西</div>
}

export default Test