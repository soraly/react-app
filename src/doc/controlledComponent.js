/**
  * input textarea select   
  * 我们通过使react变成一种单一数据源的状态来结合二者。
  * React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。
  * 相应的，其值由React控制的输入表单元素称为“受控组件”。  
  */
import React from 'react';
class ControlCom extends React.Component {
    constructor(){
        super();
        this.state = {
            news: '',
            sports: '',
            selectVal: 'lime'
        }
        this.select = <select value={this.state.selectVal} onChange={this.handleSelect.bind(this)}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
    }
    handleSubmit(event){
        event.preventDefault();
    }
    handelInput(event){
        var name = event.target.name;
        this.setState({[name]: event.target.value.toUpperCase()})
    }
    handleSelect(event){
        this.setState({selectVal: event.target.value})
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="">
                Name: 
                <input type="text" name='news' value={this.state.news} onChange={this.handelInput.bind(this)}/>
                <input type="text" name='sports' value={this.state.sports} onChange={this.handelInput.bind(this)}/>
                <p> <input type="checkbox" id='check'/> <label htmlFor="check">对吗</label> </p>
                </label>
                <input type="submit" value='SUBMIT'/>
                {this.select}
            </form>
        )
    }
}

export default ControlCom