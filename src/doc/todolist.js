import React,{Component} from 'react'

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            inputVal: '',
            list: [
               
            ]
        }
    }
    handleAddItemInput(val){
        this.setState({
            inputVal: val
        });
        
    }
    handleSubmitBtn(){
        if(!this.state.inputVal){
            return
        }
        var list = this.state.list;
        list.push({id: list.length+1, name: this.state.inputVal, status: 'undone'});
        
        this.setState({
            list: list,
            inputVal: ''
        })
    }
    handleListContain(id){

        this.state.inputVal.substr(0,3);


        // this.state.list.forEach(item=>{
        //     if(item.id===id){
        //         item.status = item.status==='undone'?'done':'undone'
        //     }
        // });
        
    }
    render(){
        return (
            <div>
                <Title  title={'Todos'}/>
                <ListContain onListContain={this.handleListContain.bind(this)} list={this.state.list} />
                <InputAdd onAddItemInput={this.handleAddItemInput.bind(this)} onSubmitBtn={this.handleSubmitBtn.bind(this)} inputVal={this.state.inputVal}/>
            </div>
        )
    }
}

class InputAdd extends Component {
    handleAddItemInputChange(e){
        this.props.onAddItemInput(e.target.value);  
    }
    handleSubmitBtnChange(){
        this.props.onSubmitBtn();   
    }
    render(){
        return (
            <div>
                <input type='text' value={this.props.inputVal} onChange={this.handleAddItemInputChange.bind(this)} placeholder=''  /> 
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
    handleListItem(id){
        this.props.onListContain(id)
    }
    render(){
        return <ul>
            {this.props.list.map((item,key)=><ListItem onListItem={this.handleListItem.bind(this)} key={key} item={item}/>)}
        </ul>
    }
}

class ListItem extends Component {
    handleListItemClick(){
        this.props.onListItem(this.props.item.id);
        
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