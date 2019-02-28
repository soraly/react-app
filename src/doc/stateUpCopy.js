/**
  * 状态提升
  *   
  */
import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            waterVal: ''
        }
    }
    handleChange(event){
        this.setState({waterVal: event.target.value})
    }
    render() {
        function BoilingVerdict(props){
            if(props.value>100){
            return <p>水烧开了</p>
            }else {
            return <p>水不会烧开</p>
            }
        }
        var temperature = this.state.waterVal;
        return (
            <fieldset>
                <legend>输入一个华氏温度</legend>
                <input
                value={temperature}
                onChange={this.handleChange.bind(this)} />

                <BoilingVerdict
                value={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
 