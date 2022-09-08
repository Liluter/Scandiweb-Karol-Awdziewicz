import React, { Component } from 'react'
import '../styles/MiniCart.scss'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber, getTotalAmount, getCurrentCurrency } from '../redux/selectors'
import MiniCartItems from './MiniCartItems'
import { Link } from 'react-router-dom'

export class MiniCart extends Component {
  constructor(props){
    super(props)
    this.state={}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.miniCartMenu()
  }

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
          <div className='miniCart__content'> <MiniCartItems itemsByIds={this.props.itemsByIds}/></div>

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
  getTotalAmount:  getTotalAmount(state) , 
  currentCurrency: getCurrentCurrency(state) }))(MiniCart)
  
  // cartItemNumber: (getCartItemNumber(state) ), 
  // getTotalAmount:getTotalAmount(state), 
// connect(null, { toggleCurrency})(DropDownCur)
//state => ({currentCurrency: getCurrentCurrency(state)})