/**
  * 状态提升 摄氏和华氏温度转换
  *   
  */
import React, { Component } from 'react'

const scaleNames = {
    c: '摄氏',
    f: '华氏'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
}

function BoilingVerdict(props){
    if(props.value>100){
    return <p>水烧开了</p>
    }else {
    return <p>水不会烧开</p>
    }
  }

  
class TemperatureInput  extends Component {
    constructor() {
        super();
        this.state = {
            waterVal: ''
        }
    }
    handleChange(event) {
        this.props.onTemperatureChange({scale: this.props.scale, value:event.target.value});
    }
    render() {
        
        return (
            <fieldset>
                <legend>输入一个{scaleNames[this.props.scale]}温度</legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleChange.bind(this)} />
            </fieldset>
        )
    }
}

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            temperature: 123,
            scale: 'c'
        }
    }
    handleChange(obj){
        this.setState({temperature: obj.value, scale: obj.scale});
      }
    render(){
        var sheshi,huashi;
        var temperature = this.state.temperature;
        if(this.state.scale === 'c'){
            sheshi = temperature;
            huashi = tryConvert(temperature, toFahrenheit);
        }else {
            huashi = temperature;
            sheshi = tryConvert(temperature, toCelsius);
        }
        return <div>
                <TemperatureInput  scale='c' onTemperatureChange={this.handleChange.bind(this)} temperature={sheshi}></TemperatureInput >
                <TemperatureInput  scale='f' onTemperatureChange={this.handleChange.bind(this)} temperature={huashi}></TemperatureInput >
                <BoilingVerdict
                    value={parseFloat(this.state.temperature)} />
            </div>
    }
}

export default Calculator