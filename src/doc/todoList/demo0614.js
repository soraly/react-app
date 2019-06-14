import React, { Component } from 'react'

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            items: [
                { id: 13, text: 'hello' },
                { id: 23, text: 'xiang' },
            ]
        }
    }
    handleInput(event) {
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
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <input onChange={this.handleInput.bind(this)} value={this.state.text} type="text" />
                    <button>{'Add'}</button>
                </form>
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

export default TodoApp