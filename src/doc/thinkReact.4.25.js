import React, { Component } from 'react'
import PropTypes from 'prop-types'

var products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    { category: 'Sporting Goods', price: '$19.99', stocked: false, name: 'pingpang' },
];


class FilterableProductTable extends Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            inStockOnly: false,
            loading: true,
        }
    }
    componentDidMount(){
        this.props.promise.then(value=>{
            this.setState({loading: false})
        })
    }
    handleInput(val){
        this.setState({
            filterText: val
        })
    }
    handleCheck(val){
        this.setState({
            inStockOnly: val
        })
    }
    render() {
        if(this.state.loading){
            return <span>i am loading...</span>
        }
        return (<div>
            <SearchBar filterText={this.state.filterText} 
                onFilterTextInput={this.handleInput.bind(this)} 
                onCheckChange={this.handleCheck.bind(this)}
                inStockOnly={this.state.inStockOnly} 
               
            ><Hello/></SearchBar>
            <ProductTable 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                products={products} />
            <ListOfTenThings />
        </div>)
    }
}

function Hello(){
    return <span style={{fontSize: '24px'}}>hello</span>
}
class SearchBar extends Component {
    handleInput(event){
        var type = event.target.type;
        if(type ==='text'){
            this.props.onFilterTextInput && this.props.onFilterTextInput(event.target.value);
        }else if(type==='checkbox') {
            this.props.onCheckChange && this.props.onCheckChange(event.target.checked);
        }
        
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={this.handleInput.bind(this)} value={this.props.filterText} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInput.bind(this)}  />
                    {' '}
                    Only show products in stock
                </p>
                {this.props.children}
                {console.log(this.props.children)}
            </div>
        )
    }
}

SearchBar.propTypes = {
    inStockOnly: PropTypes.bool,
    onCheckChange: PropTypes.func.isRequired,
    hehe: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
SearchBar.defaultProps = {
    hehe: 'hehe'
}
class ProductTable extends Component {
    render() {
        var list = this.props.products, rows=[],lastCategory=null;
        list.forEach((item,index)=>{
            if(!item.name.includes(this.props.filterText) || (this.props.inStockOnly && !item.stocked)){
                return
            }
            if(item.category!==lastCategory){
                lastCategory = item.category;
                rows.push(<ProductCategoryRow category={item.category} key={index} />)
            }
             rows.push(<ProductRow product={item} key={item.price}/>)
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr><th colSpan='2'>{this.props.category}</th></tr>
        )
    }
}

class ProductRow extends Component {
    render() {
        var name = this.props.product.stocked ? 
        this.props.product.name : 
        <span style={{color: 'red'}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
            )
    }
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }

export default FilterableProductTable