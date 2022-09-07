import React, { Component } from 'react'
import '../styles/MiniCartItem.scss'
import { currencyNumber } from '../utils/currencyNumber'
import { connect } from 'react-redux'
import { getCurrentCurrency } from '../redux/selectors'

import {ReactComponent as Plus} from '../assets/Plus.svg'
import {ReactComponent as Minus} from '../assets/Minus.svg'
import VariantTypesMiniCart from './VariantTypesMiniCart'
import { addToCartItem} from '../redux/action'

export class MiniCartItem extends Component {
  constructor(props) {
    super(props)
    this.state={counter:0}
    this.switchImage = this.switchImage.bind(this)
    this.toCartItem = this.toCartItem.bind(this)
  }

  switchImage(){
    this.setState((state,props)=>( (state.counter === props.item.gallery.length -1) ? {counter: 0 }: {counter: state.counter + 1} ))
  }

  // to redux
  toCartItem = (num) => {
    console.log('toCartItem payload' )
    this.props.addToCartItem(num + 1)
  }
  // /onClick={()=> {  this.toCart({...this.state, ...this.props.product})

  render() {
    console.log('MiniCartItem',this.props)

    let {brand, name, prices, gallery} = this.props.item
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + prices[currencyNumber(this.props.currentCurrency)].amount
    return (
      <div className='miniCartItem'>
        <div className='miniCartItem__variant'>
          <h1 className='miniCartItem__variant--header'>{brand}</h1>
          <h2 className='miniCartItem__variant--name'>{name}</h2>
          <h2 className='miniCartItem__variant--price'>{price}</h2>
          {/* <VariantTypesMiniCart attributes={this.props.cart}/> */}
        </div>
        <div className='miniCartItem__counter'>
          <button className='miniCartItem__counter--button' onClick={()=>this.toCartItem(this.props.item.count)}><Plus/></button>
          <div className='miniCartItem__counter--actualCount'>{this.props.item.count}</div>
          <button className='miniCartItem__counter--button' onClick={()=>console.log('MINUS')}><Minus/></button>
        
        </div>
        <div className='miniCartItem__photo'>
          <img 
          className='miniCartItem__photo--image'
          src={ gallery[this.state.counter] || '/logo192.png' }
          alt='product_photo'
          onClick={ this.switchImage}
          /></div>
        {/* {createAction.map((item, index)=> )} */}
      </div>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) , {addToCartItem} )(MiniCartItem)
//connect(state => ({currentCurrency: getCurrentCurrency(state)}), {addToCart} )(VariantBlock)