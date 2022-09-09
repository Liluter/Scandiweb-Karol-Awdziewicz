import React, { Component } from 'react'
import { currencyNumber } from '../utils/currencyNumber'
import { connect } from 'react-redux'
import { getCurrentCurrency } from '../redux/selectors'
import { addToCartItem} from '../redux/action'

import {ReactComponent as Plus} from '../assets/Plus.svg'
import {ReactComponent as Minus} from '../assets/Minus.svg'
import VariantTypesMiniCart from './VariantTypesMiniCart'
// import VariantTypes from './VariantTypes'
import '../styles/MiniCartItem.scss'



export class MiniCartItem extends Component {
  constructor(props) {
    super(props)
    this.state={counter:0}
    this.switchImage = this.switchImage.bind(this)
    this.toCartItemAdd = this.toCartItemAdd.bind(this)
    this.toCartItemSub = this.toCartItemSub.bind(this)
    this.thoggleAttribute = this.toggleAttribute.bind(this)
  }

  switchImage(){
    this.setState((state,props)=>( (state.counter === props.item.product.gallery.length -1) ? {counter: 0 }: {counter: state.counter + 1} ))
  }

  toggleAttribute = (arg) =>{
    this.setState((state,props)=> ({choices: {...arg}  }))
    // console.log('toggleAttribute activated temporarrySet :' , arg)
  }


  // to redux
  toCartItemAdd = ( itemStoreId , prev) => {
    console.log('itemStoreId', )
    const amount = true
    this.props.addToCartItem(itemStoreId, amount)
  }
  toCartItemSub = ( itemStoreId , prev) => {
    const amount = false
        if (prev === 1) {
          this.props.removeItem(itemStoreId)
      } else {
        this.props.addToCartItem(itemStoreId, amount)
      }
  }
  //old
  // toCartItemAdd = (num, itemIndex) => {
  //   this.props.addToCartItem(num + 1)
  //   console.log('toCartItem payload', num +1 , 'itemIndex :', itemIndex )
  // }
  // toCartItemSub = (num) => {
  //   if (num == 0) {
  //     console.log('toCartItem payload', null )
  //   } else {
  //     this.props.addToCartItem(num - 1)
  //     console.log('toCartItem payload', num - 1 )
  //   }
  // }
  // /onClick={()=> {  this.toCart({...this.state, ...this.props.product})

  render() {
    console.log(`MiniCartItem ${this.props.item.product.name} PROPS:`,this.props)

    let {brand, name, prices, gallery, idKey} = this.props.item.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + prices[currencyNumber(this.props.currentCurrency)].amount
    return (
      <div className='miniCartItem'> 
        <div className='miniCartItem__variant'>
          <h1 className='miniCartItem__variant--header'>{brand}</h1>
          <h2 className='miniCartItem__variant--name'>{name}</h2>
          <h2 className='miniCartItem__variant--price'>{price}</h2>
          <VariantTypesMiniCart 
          attributes={this.props.item.product.attributes}
          // idKey={idKey}
          toggleAttribute={this.toggleAttribute}
          itemStoreId= {this.props.itemStoreId}
          item={this.props.item}
          />
        </div>
        <div className='miniCartItem__counter'>
          <button className='miniCartItem__counter--button' onClick={()=>this.toCartItemAdd( this.props.itemStoreId, this.props.item.count)}><Plus/></button>
          <div className='miniCartItem__counter--actualCount'>{this.props.item.count}</div>
          <button className='miniCartItem__counter--button' onClick={()=>this.toCartItemSub( this.props.itemStoreId, this.props.item.count)}><Minus/></button>
        
        </div>
        <div className='miniCartItem__photo'>
          <img 
          className='miniCartItem__photo--image'
          src={ gallery[this.state.counter] || '/logo192.png' }
          alt='product_photo'
          onClick={ this.switchImage}
          />
        </div>
      </div>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) , {addToCartItem} )(MiniCartItem)
//connect(state => ({currentCurrency: getCurrentCurrency(state)}), {addToCart} )(VariantBlock)