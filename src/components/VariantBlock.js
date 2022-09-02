import React, { Component } from 'react'

import '../styles/VariantBlock.scss'

import { connect } from 'react-redux';  
import { getCurrentCurrency } from '../redux/selectors'
import { currencyNumber } from '../utils/currencyNumber';
import Description from './Description';

export class VariantBlock extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  // Attributes filter function to do

  render() {
    let { brand, name ,inStock , prices, description, attributes} = this.props.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount
    console.log(attributes[0])
    return (
      <aside className='productDesc__block'>
              <h1 className='productDesc__block--header'>{brand}</h1>
              <h2 className='productDesc__block--name'>{name}</h2>

              
              <div className='productDesc__block--variantSize'>
                <div className='variantSize__label'>SIZE:</div>
                <div className='variantSize__options'>
                  <button className='variantSize__options--Btn'>XS</button>
                  <button className='variantSize__options--Btn'>S</button>
                  <button className='variantSize__options--Btn'>M</button>
                  <button className='variantSize__options--Btn'>L</button>
                </div>
              </div>

              <div className='productDesc__block--variantColor'>
                <div className='variantColor__label'>COLOR:</div>
                <div className='variantColor__options'>
                  <button className='variantColor__options--Btn'></button>
                  <button className='variantColor__options--Btn'></button>
                  <button className='variantColor__options--Btn'></button>
                </div>
              </div>

              <div className='productDesc__block--price'>
                <div className='price__label'>PRICE:</div>
                <div className='price__amount'>
                  {price}
                </div>
              </div>

              <button className={`productDesc__block--button ${inStock ? '' : 'notInStock'}`} >
                {inStock ? 'ADD TO CART' : 'NOT IN STOCK' }
              </button>

              <footer className='productDesc__block--footer' >
                <Description description={description}/>
              </footer>
              
            </aside>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) )(VariantBlock)
//export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) )(Navigation)
// { this.props.product.prices[currencyNumber(this.props.currentCurrency)].currency.symbol }{this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount}

// Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.