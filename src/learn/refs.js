import React, { Component } from 'react'

class Refs extends Component {
    constructor() {
        super();
        this.state = {

        }
        //Refs是使用React.createRef()创建的，并通过ref属性附加到React元素（HTML元素或者class组件）。
        //将Refs赋值给实例属性，可以方便地在整个组件中引用他们
        this.inp = React.createRef();
        this.dialog = React.createRef();
        //回调Refs，将函数传给ref，然后在实例属性中获得对React元素的引用
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.setDialogRef = element => this.dialogElement = element;
    }
    componentDidMount() {
        //获取焦点
        this.inp.current.focus();
        console.log(this.dialogElement.sayHello());
    }
    render() {
        return <div>
            <h2>Refs</h2>
            <div>
                <input type="text" ref={this.inp} />
                <p>
                    <button ref={this.setTextInputRef} >click me ..</button>
                </p>
                {/* 将函数传给子组件，父元素可以获得子组件中ref设置的那个元素的引用 */}
                <Dialog ref={this.setDialogRef} h2Ref={element=>this.h2Element = element}>
                    <ul>
                        <li>aaa</li>
                        <li>bbb</li>
                        <li>ccc</li>
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
                <h2 ref={this.props.h2Ref}>this is a dialog</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Refs