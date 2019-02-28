 /**
  * 阻止默认事件，传递event
  * @usage  <Popper />
  */
import React, {Component} from 'react'

class Popper extends Component {
    constructor(){
        super()
        this.state = {
            name: 'popper'
        }
    }
    render(){
        return (
            <div>
                <h2>use prevernt</h2>
                {/* 通过bind传递参数 */}
                <a onClick={this.preventPop.bind(this, this.state.name,555)} href='http://baidu.com'>this is a link</a>
            </div>
        )
    }
    // 事件对象e要放在最后
    preventPop(name,num,e){
        console.log(123,name,num);
        e.preventDefault();
        
    }
}

export default Popper