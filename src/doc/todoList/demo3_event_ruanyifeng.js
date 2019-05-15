import React, {Component} from 'react'
import myEmitter from './demo3_store_ruanyifeng'
import './main.css'

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
        if(value){
            myEmitter.addTodo({name: value});
            myEmitter.emitChange();
            this.refs.inputText.value = '';
        }
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
        myEmitter.addChangeListener(this._onChange.bind(this));   
    }
    _onChange(){
        this.setState({itemList: myEmitter.itemList});
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
        myEmitter.deleteTodo(index);
        myEmitter.emitChange();
    }
    hadleItemClick(item){
        myEmitter.toggleTodo(item);
        myEmitter.emitChange();
    }
    render() {
        return (
            <li className={this.props.item.done?'done':'notdone'}> <span onClick={this.hadleItemClick.bind(this,this.props.item)}>{this.props.item.name} </span>
            <button style={{ marginLeft: '15px' }} onClick={this.handleButtonClick.bind(this, this.props.item.id)}>X</button></li>
        )
    }
}

export default Demo2