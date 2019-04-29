import React,{Component} from 'react'
import TodoStore from '../stores/TodoStore'
console.log(TodoStore)

class TodoList extends Component {
    
    render(){
        return (
            <div>
                <Title  title={'Todos'}/>
                <ListContain  />
                <InputAdd />
            </div>
        )
    }
}

class InputAdd extends Component {
    handleSubmitBtnChange(){
        var value = this.refs.todoTitle.value;
        TodoStore.addItemInput(value);
        TodoStore.addNewTodo();
        TodoStore.emit('change');
        this.refs.todoTitle.value =  '';
    }
    render(){
        return (
            <div>
                <input type='text' ref="todoTitle" placeholder=''  /> 
                <button onClick={this.handleSubmitBtnChange.bind(this)}>Add Todo</button>
            </div>
        )
    }
}

class Title extends Component {
    render(){
        return <h3>{this.props.title}</h3>
    }
}

class ListContain extends Component {
    constructor(){
        super();
        this.state = TodoStore.getAll();
    }
    componentDidMount(){
        var _this = this;
        TodoStore.on('change',function(){
            _this.setState(this.getAll());
        })
    }

    render(){
        return <ul>
            {this.state.list.map((item,key)=><ListItem key={key} item={item}/>)}
        </ul>
    }
}

class ListItem extends Component {
    handleListItemClick(){
        TodoStore.toggleDone(this.props.item.id);
        TodoStore.emit('change')
    }
    render(){
        var span;
        if(this.props.item.status==='done'){
            span = <span>{this.props.item.name}--done</span>
        }else {
            span = <span style={{color: 'red'}}>{this.props.item.name}--undone</span>
        }
        return <li onClick={this.handleListItemClick.bind(this)}>
           {span}
            <button  style={{marginLeft: '5px'}}>x</button>
        </li>
    }
}

export default TodoList