import React, { Component } from 'react'
import { currencyNumber } from '../utils/currencyNumber'
import { connect } from 'react-redux'
import { getCurrentCurrency } from '../redux/selectors'
import { addToCartItem} from '../redux/action'
import { Link } from 'react-router-dom'
import {ReactComponent as Plus} from '../assets/PlusBig.svg'
import {ReactComponent as Minus} from '../assets/MinusBig.svg'
import {ReactComponent as CaretLeft} from '../assets/CaretLeft.svg'
import {ReactComponent as CaretRight} from '../assets/CaretRight.svg'
import VariantTypesCart from './VariantTypesCart'
import '../styles/CartItem.scss'



export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state={counter:0}
    this.switchImage = this.switchImage.bind(this)
    this.switchImageUp = this.switchImageUp.bind(this)
    this.switchImageDown = this.switchImageDown.bind(this)
    this.toCartItemAdd = this.toCartItemAdd.bind(this)
    this.toCartItemSub = this.toCartItemSub.bind(this)
    this.thoggleAttribute = this.toggleAttribute.bind(this)
  }

  switchImage(){
    this.setState((state,props)=>( (state.counter === props.item.product.gallery.length -1) ? {counter: 0 }: {counter: state.counter + 1} ))
  }
  switchImageUp(){
    this.setState((state,props)=>( (state.counter === props.item.product.gallery.length -1) ? {counter: 0 }: {counter: state.counter + 1} ))
  }
  switchImageDown(){
    this.setState((state,props)=>( (state.counter === 0) ? {counter: props.item.product.gallery.length -1 }: {counter: state.counter - 1} ))
  }

  toggleAttribute = (arg) =>{
    this.setState((state,props)=> ({choices: {...arg}  }))
  }

  toCartItemAdd = ( itemStoreId ) => {
    console.log('itemStoreId', )
    const amount = true
    this.props.addToCartItem(itemStoreId, amount)
  }
  toCartItemSub = ( itemStoreId , prev) => {
    const amount = false
        if (prev === 1) {
          this.props.removeItem(itemStoreId)
          // console.log('Propsy, ', this.props)
      } else {
        this.props.addToCartItem(itemStoreId, amount)
      }
  }

  render() {
    console.log('Propsy',this.props)
    const {brand, category, id, name, prices, gallery} = this.props.item.product
    const price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + prices[currencyNumber(this.props.currentCurrency)].amount
    return (
      <>
        <div className='CartItem'> 
          <div className='CartItem__variant'>
            <h1 className='CartItem__variant--header'>{brand}</h1>
            <h2 className='CartItem__variant--name'>{name}</h2>
            <h2 className='CartItem__variant--price'>{price}</h2>
            <VariantTypesCart 
            attributes={this.props.item.product.attributes}
            // idKey={idKey}
            toggleAttribute={this.toggleAttribute}
            itemStoreId= {this.props.itemStoreId}
            item={this.props.item}
            />
          </div>
            <>
              <div className='CartItem__counter'>
                <button 
                className='CartItem__counter--button' 
                onClick={()=>this.toCartItemAdd( this.props.itemStoreId, this.props.item.count)}>
                  <Plus/>
                </button>
                <div className='CartItem__counter--actualCount'>{this.props.item.count}</div>
                <button 
                // `miniCartItem__counter--button ${this.props.item.count === 1 ? 'toDelete' : ''}`
                className={`CartItem__counter--button  ${this.props.item.count === 1 ? 'toDelete' : '' }`}
                onClick={()=>this.toCartItemSub( this.props.itemStoreId, this.props.item.count)}>
                  <Minus className='minus1'/>
                  {this.props.item.count === 1 ? <Minus className='minus2' />: null}
                  {/* { this.props.item.count == 1 ? <XsignBig/> : <Minus/>} */}
                </button>
              
              </div>
              <div className='CartItem__photo'>
                <Link to={`/${category}/${id}`}>   
                  <img 
                  className='CartItem__photo--image'
                  src={ gallery[this.state.counter] || '/logo192.png' }
                  alt='product_photo'
                  onClick={ this.switchImage}
                  />
                </Link>
                <div className='CartItem__photo--buttonSet'>
                  <button className='switch' onClick={ this.switchImageDown}><CaretLeft/></button>
                  <button className='switch' onClick={ this.switchImageUp}><CaretRight/></button>
                </div>
              </div>
            </>
        </div>
        <hr className='cart__hLine'></hr>
      </>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) , {addToCartItem} )(CartItem)
//connect(state => ({currentCurrency: getCurrentCurrency(state)}), {addToCart} )(VariantBlock)

// <Link to={`/${this.props.product.category}/${this.props.product.id}`}> <div className='productCard__Btn--pushToCart'><ToCartBtn /></div></Link>