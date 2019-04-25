import React, { Component } from 'react'

var json = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    {category: 'Sporting Goods', price: '$19.99', stocked: false, name: 'pingpang'},
];

class InputSearch extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    handleInput(event) {
        this.props.onInputChange(event.target.value)
    }
    handleCheck(event) {
        this.props.onCheckChange(event.target.checked)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInput.bind(this)} type='text' placeholder='search..' value={this.props.inputVal} /> <br></br>
                <label htmlFor="check">
                    <input checked={this.props.checkVal} onChange={this.handleCheck.bind(this)} id='check' type="checkbox" /> Only show products in stock
                </label>
            </div>
        )
    }
}

class Goods extends Component {
    render() {
        //构造数据 ==> [{name:xxx,children:[]},{name:xxx,children:[]},...]
        var list = this.props.json, arr = [];
        this.props.checkVal && (list = this.props.json.filter(item => item.stocked === this.props.checkVal))
        list.forEach(item => {
            !arr.includes(item.category) && arr.push(item.category);
        })
        arr = arr.reduce((base, cur) => {
            base.push({ name: cur, children: [] })
            return base
        }, [])

        list.forEach(item => {
            arr.forEach(one => {
                if (item.category === one.name) {
                    if (this.props.inputVal) {
                        !!~item.name.indexOf(this.props.inputVal) && one.children.push(item)
                    } else {
                        one.children.push(item)
                    }

                }
            })
        })

        return (
            <div>
                <h2>
                    <span style={{ marginRight: '20px' }}>Name</span>
                    <span>Price</span>
                </h2>
                {arr.map((item, index) => {
                    return <ItemList key={index} list={item.children} name={item.name}></ItemList>
                })}
            </div>
        )
    }
}

class ProductTable extends Component {
    render(){
        var lastname = null;
        var list = json.reduce((base,cur)=>{
            if(lastname!==cur.category){
                base.push({'key':'category',name:cur.category});
            }
            base.push(cur);
            lastname = cur.category;
            return base;
        },[])

        return (
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item,index)=>{
                            return item.key === 'category' ? 
                            <ProductCategoryRow key={index} category={item.name}/> :
                            <ProductRow key={index} product={item}/>
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render(){
        return (
            <tr className='category'>
                <td colSpan='2'>{this.props.category}</td>
            </tr>
        )
    }
}  

class ProductRow extends React.Component {
    render(){
        return (
            <tr>
                <td className={!this.props.product.stocked?'red':''}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}  

class ItemList extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                {this.props.list.map((item, index) => {
                    return <p key={index} className={item.stocked === false ? 'red' : ''}>
                        <span style={{ marginRight: '20px'}} >{item.name}</span>
                        <span>{item.price}</span>
                    </p>
                })}

            </div>
        )
    }
}

export default class thinkReact extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            checkVal: false
        }
    }
    handleInput(val) {
        this.setState({ inputVal: val })
    }
    handleCheck(val) {
        this.setState({ checkVal: val })
    }
    render() {
        return (
            <div>
                <InputSearch
                    checkVal={this.state.checkVal}
                    inputVal={this.state.inputVal}
                    onCheckChange={this.handleCheck.bind(this)}
                    onInputChange={this.handleInput.bind(this)}></InputSearch>
                <ProductTable/>
                {/* <Goods
                    inputVal={this.state.inputVal}
                    checkVal={this.state.checkVal}
                    json={json}></Goods> */}
            </div>
        )
    }
}
