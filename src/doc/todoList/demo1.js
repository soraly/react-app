import React,{Component} from 'react'

class Demo1 extends Component  {
    constructor(){
        super();
        this.state = {
            todolist: [],
            inputVal: 'enter some...'
        }
    }
    handleInput(val){
        this.setState({inputVal: val});
    }
    handleButton(){
        var obj = {id: this.state.todolist.length+1, name: this.state.inputVal};
        this.state.todolist.push(obj);
        this.setState({todolist: this.state.todolist,inputVal: ''});
    }
    render(){
        return (<div>
            <AddToDo 
            inputVal={this.state.inputVal} 
            onInput={this.handleInput.bind(this)} 
            onButton={this.handleButton.bind(this)}
            />
            <TodoList todolist={this.state.todolist} />
        </div>)
    }
}

class AddToDo extends Component {
    handleBtnClick(e){
        e.preventDefault();
        this.refs.inputText.focus()
        this.props.onButton()
    }
    handelInputChange(e){
        this.props.onInput(e.target.value);
    }
    render(){
        return (
            <form>
                <input value={this.props.inputVal} ref='inputText' onChange={this.handelInputChange.bind(this)} type="text"/>  
                <button onClick={this.handleBtnClick.bind(this)}>ADD</button>
            </form>
        )
    }
}

class TodoList extends Component {
    render(){
        var items = this.props.todolist.map(item=>{
                return <TodoItem key={item.id} item={item}/>
            });
        return (
            <ul>
                {items} 
            </ul>
            
        )
    }
}
class TodoItem extends Component {
    render(){
        return (
            <li>{this.props.item.name} <button>X</button></li>
        )
    }
}


export default Demo1