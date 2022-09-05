import React, { Component } from 'react'

import '../styles/VariantBlock.scss'

import { connect } from 'react-redux';  
import { getCurrentCurrency } from '../redux/selectors'
import { addToCart } from '../redux/action';
import { currencyNumber } from '../utils/currencyNumber';
import Description from './Description';
import VariantTypes from './VariantTypes';


export class VariantBlock extends Component {
  constructor(props){
    super(props)
    this.state = {temporarySet:{id: this.props.product.id ,
                                name: this.props.product.name,
                                brand: this.props.product.brand,
                                prices: this.props.product.prices,
                                gallery: this.props.product.gallery,
                                count: 1,}}
    this.toCart = this.toCart.bind(this)
  }

  
  toggleAttribute = (arg) =>{
    this.setState((state,props)=> ({temporarySet:{...state.temporarySet, ...state.temporarySet.attributes , ...arg }  }))
  }
  // to redux
  toCart = (payload) => {
    this.props.addToCart(payload)
  }

  render() {
    // console.log('VariantBloc state',this.state)
    let { brand, name ,inStock , prices, description, attributes} = this.props.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount
    
    return (
      <aside className='productDesc__block'>
        <h1 className='productDesc__block--header'>{brand}</h1>
        <h2 className='productDesc__block--name'>{name}</h2>

        <VariantTypes attributes={attributes} toggleAttribute={this.toggleAttribute}/>

        <div className='productDesc__block--price'>
          <div className='price__label'>PRICE:</div>
          <div className='price__amount'>
            {price}
          </div>
        </div>

        <button 
          className={`productDesc__block--button ${inStock ? '' : 'notInStock'}`}
          onClick={()=> {  this.toCart(this.state.temporarySet)  }} >
          {inStock ? 'ADD TO CART' : 'NOT IN STOCK' }
        </button>

        <footer className='productDesc__block--footer' >
          <Description description={description}/>
        </footer>
        
      </aside>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}), {addToCart} )(VariantBlock)
//export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) )(Navigation)
// { this.props.product.prices[currencyNumber(this.props.currentCurrency)].currency.symbol }{this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount}

// Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.