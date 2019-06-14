import React, { Component } from 'react'
import Remarkable from 'remarkable'
class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            items: [],
            dangerText: { __html: '<h3>hello</h3>' }
        }
    }
    handleInput(event) {
        console.log()
        this.setState({ text: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{
            id: this.state.items.length + 1,
            text: this.state.text
        }])
        this.setState({ items: nextItems, text: '' })
    }
    
    rawMarkup() {
        const md = new Remarkable();
        return { __html: this.state.text };
    }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <input ref='inp' onChange={this.handleInput.bind(this)} value={this.state.text} type="text" />
                    <button>{'Add'}</button>
                </form>
                <TodoTest text={this.state.text}/>
                <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
            </div>
        )
    }
}
const TodoList = props => (
    <ul>
        {
            props.items.map(item => (
                <li key={item.id}>{item.text}</li>
            )
            )
        }
    </ul>
)
class TodoTest extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render(){
        
        return <div>test,{this.props.text}</div>
    }
}

export default TodoApp