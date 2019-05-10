import React,{Component} from 'react'

class Demo1 extends Component  {
    constructor(){
        super();
        this.state = {
            todolist: [],
            inputVal: 123
        }
    }
    handleInput(val){
        this.setState({inputVal: val});
    }
    handleButton(){
        var obj = {id: this.state.todolist.length+1, name: this.state.inputVal};
        this.state.todolist.push(obj);
        this.setState({todolist: this.state.todolist});
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
        this.props.onButton()
    }
    handelInputChange(e){
        this.props.onInput(e.target.value);
    }
    render(){
        return (
            <form>
                <input value={this.props.inputVal} onChange={this.handelInputChange.bind(this)} type="text"/>  
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
            <li>{this.props.item.name}</li>
        )
    }
}


export default Demo1