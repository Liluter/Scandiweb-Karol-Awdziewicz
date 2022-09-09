import React, { Component } from 'react'
import '../styles/MiniCart.scss'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber, getShop, getTotalAmount, getCurrentCurrency } from '../redux/selectors'
import MiniCartItems from './MiniCartItems'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/action'

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

  // romoving item...
  removeItem(payload){
    // STOTRE DISPATCH
    const ShopFilteredArr =  Object.entries(this.props.shop.ItemsByIds).filter((e)=> (e[0]!== payload))
    const newShop = { currentCurrency: this.props.shop.currentCurrency , ItemsByIds: {...Object.fromEntries( ShopFilteredArr )} }
    console.log( 'Remove item with Id: ', payload)
    console.log( 'Remove item Old Shop with Id: ', this.props.shop)
    console.log( 'Remove item from Shop ShopFiltered: ',  ShopFilteredArr )
    console.log( 'Remove item New Shop Filtered: ', newShop)
    // feed fresh store without deleted id as payload
    this.props.removeFromCart(newShop)  //dispatch ok 
  }

  // toggleAttribute = (arg) =>{
  //   this.setState(()=> (  { ...this.state, choices: {...this.state.choices, ...arg} }  ))
  
  // }

  // handleClick = (payload) => {
  //   this.props.addToCart(payload)
  // }
  

  render() {
    let cartItemNumber = this.props.cartItemNumber;
    // console.log('MINI CART!!! getPrices', this.props.getTotalAmount)
    // console.log('MINI CART!!! getPrices', this.props)
    // console.log('minicart state',this.state)
    // console.log('minicart array !!!', Object.entries(this.props.itemsByIds)) 
    return (
      <>
        <div className='miniCart'>
          <div className='miniCart__header'> <b className='miniCart__header--bold'>My Bag</b>, {cartItemNumber ?? 0} { cartItemNumber === 1 ? 'item' : 'items'}</div>
          <div className='miniCart__content'> <MiniCartItems itemsByIds={this.props.itemsByIds} removeItem={this.removeItem} /></div>

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
  shop: getShop(state)}) , {removeFromCart})(MiniCart)
  
  // cartItemNumber: (getCartItemNumber(state) ), 
  // getTotalAmount:getTotalAmount(state), 
// connect(null, { toggleCurrency})(DropDownCur)
//state => ({currentCurrency: getCurrentCurrency(state)})