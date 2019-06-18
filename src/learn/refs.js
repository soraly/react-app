import React, { Component } from 'react'

class Refs extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.inp = React.createRef();
        this.dialog = React.createRef();
        this.setTextInputRef = element => {
            this.textInput = element
        }
    }
    componentDidMount() {
        //获取焦点
        this.inp.current.focus();
        this.dialog.current.sayHello();
        console.log(this.textInput)
    }
    render() {
        return <div>
            <h2>Refs</h2>
            <div>
                <input type="text" ref={this.inp} />
                <p>
                    <button ref={this.setTextInputRef} >click me ..</button>
                </p>
                <Dialog ref={this.dialog}>
                    <ul>
                        <li>aaa</li>
                        <li>bbb</li>
                    </ul>
                </Dialog>
            </div>

        </div>
    }
}
class Dialog extends Component {
    sayHello() {
        console.log('helo..')
    }
    render() {
        return (
            <div>
                <h2>this is a dialog</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Refs