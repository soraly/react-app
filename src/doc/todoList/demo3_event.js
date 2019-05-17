import React, {Component} from 'react'
import myEmitter from './demo2_store'

class Demo2 extends Component {
    render() {
        return (<div>
            <AddToDo />
            <TodoList />
        </div>)
    }
}

class AddToDo extends Component {
    handleBtnClick(e) {
        e.preventDefault();
        this.refs.inputText.focus();
        var value = this.refs.inputText.value;
        myEmitter.emit('clicked',value);
    }
    handelInputChange(e) {
        this.props.onInput(e.target.value);
    }
    render() {
        return (
            <form>
                <input type="text" ref='inputText' />
                <button onClick={this.handleBtnClick.bind(this)}>ADD</button>
            </form>
        )
    }
}

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            itemList: myEmitter.itemList
        }
    }
    componentDidMount(){
        myEmitter.on('clicked',item=>{
            myEmitter.itemList.push({ id: myEmitter.itemList.length + 1, name: item });
            this.setState({itemList: myEmitter.itemList});
            console.log(item, myEmitter.itemList);
        })
    }
    handleTodoitemButton(index) {
        this.props.onTodoListButton(index)
    }
    render() {
        var items = this.state.itemList.map(item => {
            return <TodoItem key={item.id} index={item.id} item={item} />
        });
        return (
            <ul>
                {items}
            </ul>

        )
    }
}
class TodoItem extends Component {
    handleButtonClick(index, event) {
        this.props.onTodoitemButton(index);
    }
    render() {
        return (
            <li> {this.props.item.name}<button style={{ marginLeft: '15px' }} onClick={this.handleButtonClick.bind(this, this.props.index)}>X</button></li>
        )
    }
}

export default Demo2