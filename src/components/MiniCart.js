import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/action'
import { getCart, 
  getCartItemNumber, 
  getShop, 
  getTotalAmount, 
  getCurrentCurrency, 
  getCurrentCurrencyLabel } from '../redux/selectors'
import MiniCartItems from './MiniCartItems'
import '../styles/MiniCart.scss'

export class MiniCart extends Component {
  constructor(props){
    super(props)
    this.state={}
    this.handleClick = this.handleClick.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleClick(){
    this.miniCartMenu()
  }

  removeItem(payload){
    const ShopFilteredArr =  Object.entries(this.props.shop.ItemsByIds).filter((e)=> (e[0]!== payload))
    const newShop = { currentCurrency: this.props.shop.currentCurrency, 
      currentCurrencyLabel: this.props.shop.currentCurrencyLabel, 
      ItemsByIds: {...Object.fromEntries( ShopFilteredArr )} }
    this.props.removeFromCart(newShop)  
  }

  render() {
    let cartItemNumber = this.props.cartItemNumber;
    return (
      <>
        <div className='miniCart'>
          <div className='miniCart__header'>
            <b className='miniCart__header--bold'>My Bag</b>, {cartItemNumber ?? 0} { cartItemNumber === 1 ? 'item' : 'items'}
          </div>
          <div className='miniCart__content'>
            <MiniCartItems itemsByIds={this.props.itemsByIds} removeItem={this.removeItem} />
          </div>
          <div className='miniCart__total'>
            <b className='miniCart__total--text'>Total</b>
            <b className='miniCart__total--amount'>{this.props.currentCurrency}{this.props.getTotalAmount}</b>
          </div>
          <div className='miniCart__footer'>
            <Link to={'cart'} >
              <button 
                onClick={()=> console.log(this)}
                className='miniCart__footer--buttonBag'>
                VIEW BAG
              </button>
            </Link>
          <button className='miniCart__footer--buttonCheckout'>CHECK OUT</button>
          </div>
        </div>
      </>
    )
  }
}

export default connect(state => ({
  cartItemNumber: getCartItemNumber(state), 
  itemsByIds: getCart(state), 
  getTotalAmount:  getTotalAmount(state), 
  currentCurrency: getCurrentCurrency(state), 
  currentCurrencyLabel: getCurrentCurrencyLabel(state), 
  shop: getShop(state)}) , {removeFromCart})(MiniCart)