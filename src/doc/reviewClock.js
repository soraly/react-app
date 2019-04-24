import React, {Component} from 'react'

class clock extends Component {
    constructor(){
        super()
        this.state = {
            name: 'clock',
            time: new Date().toLocaleTimeString(),
            value: 'please enter..'
        }
    }
    timer(){
        this.setState({time: new Date().toLocaleTimeString()})
    }
    handleInput(e){
        this.setState({value: e.target.value.toUpperCase()})
    }
    render(){
        var Button;
        if(this.props.hello){
            Button = <Hello name='xiang'></Hello>
        }else {
            Button = <GoodBye></GoodBye>
        }
        const numbers = [11, 21, 3, 4, 5];
        return <div>
        {this.state.time} <button onClick={this.timer.bind(this)}>click me </button>
        {/*  此处如果不绑定this，gogogo函数获取到的this就是undefined*/}
        <a href='http://baidu.com' onClick={this.gogogo.bind(this,'gogogo...')}>gogogo</a>  

        {Button}
        <ul>
             {numbers.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
       
        <form>
            <label htmlFor="hehe">
            name: &nbsp;
                <input onChange={this.handleInput.bind(this)}  value={this.state.value} type="text"/>
            </label>
        </form>
        <span>{this.props.hello}</span>
        </div>
    }
    gogogo(val, e){
        
        e.preventDefault();
        console.log(e,val);
       
    }
    test(){
        console.log(this.state.name,'nnnn')
    }
    componentDidMount(){
        setInterval(this.timer.bind(this),1000);
        this.test()
        //var timerid=setInterval(()=>this.timer(),1000)
        
    }
}

function Hello(props){
    return (<div><h2>hello,world</h2><span>{props.name}</span></div>)
}
function GoodBye(){
    return <div>bye,bye!!!</div>
}
export default clock