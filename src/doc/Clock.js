 /**
  * 定时器
  * @param {string} increment 增量
  * @usage  <Clock increment = '10'/>
  */
import React, {Component} from 'react'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            counter: 0
        }
    }
    // 属性初始化器语法: This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleButton=()=>{
        this.setState((prev,increment)=>{
            return {counter: prev.counter + Number(this.props.increment)}
        });
    }
    
    render(){
        console.log(this.props,'props')
        return (
            <div>
                <h2>It is {this.state.time}.</h2>
                <h4>计数器：{this.state.counter}</h4>
                <Button handleButton={this.handleButton} />
            </div>
        )
    }
    updateTime(){
        this.setState({
            time: new Date().toLocaleTimeString(),
            
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    componentDidMount(){
         this.timer = setInterval(() => {
            this.updateTime()
         }, 1000);
    }
}

class Button extends Component {
    test(val){
        if(this.props.handleButton){
            this.props.handleButton();
        }
    }
    render(){
        return (
            <button  onClick={this.test.bind(this,123)}>click me</button>
        )
    }
}
export default Clock