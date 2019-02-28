/**
  * 渲染列表数据
  *   
  */
import React from 'react'

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            numbers : [1, 'a',2, 3, 4, 5]
        }
        this.arr = this.state.numbers.map((item,index)=><li key={index}>{item}</li>);
        console.log(this.arr)
    }
    render(){
        return <div>
            {this.state.numbers.map((item,index)=><li key={index}>{item}</li>)}
        </div>
        
    }
}


function Numbers(props){
    var numbers = props.numbers;
    var listItems = numbers.map((item,index)=><li key={index}>{item}</li>);
    return <ul>{listItems}</ul>
}
// usage： <Numbers numbers={[1,2,'a','b']}></Numbers>

export default List