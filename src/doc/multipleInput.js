import React,{Component} from 'react';

class MultiInput extends Component {
    constructor(){
        super()
        this.state = {
            number: 10,
            checkauth: true
        }
    }
    handleInput(e){
        var target = e.target;
        var name = target.name;

        console.log(target.type ,'target.value')
        this.setState({
            [name]: target.type==='number' ? target.value : target.checked
        })
    }
    render(){
        return <div>
            <form>
                <input type='number' value={this.state.number} name='number' onChange={this.handleInput.bind(this)}></input>
                <input type="checkbox" checked={this.state.checkauth} name='checkauth' onChange={this.handleInput.bind(this)} />agree
            </form>
            <Bigcontain>
                <h2>hello,world</h2>
                <span>xiang</span>
            </Bigcontain>
        </div>
    }
}
class Bigcontain extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return <div>
            <div className='title'>{this.props.children}</div>
        </div>
    }
}
export default MultiInput