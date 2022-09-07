import React, { Component } from 'react'
import '../styles/MiniCart.scss'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber } from '../redux/selectors'
import MiniCartItems from './MiniCartItems'


export class MiniCart extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    let cartItemNumber = this.props.cartItemNumber;
    console.log('minicart props',this.props)
    console.log('minicart state',this.state)
    return (
      <>
        <div className='miniCart'>
          <div className='miniCart__header'> <b className='miniCart__header--bold'>My Bag</b>, {cartItemNumber} { cartItemNumber === 1 ? 'item' : 'items'}</div>
          <div className='miniCart__content'> <MiniCartItems cart={this.props.cart}/></div>

          <div className='miniCart__total'>
            <b className='miniCart__total--text'>Total</b>
            <b className='miniCart__total--amount'>$200.00</b>
          </div>
          
          <div className='miniCart__footer'>
          <button className='miniCart__footer--buttonBag'>VIEW BAG</button>
          <button className='miniCart__footer--buttonCheckout'>CHECK OUT</button>
          </div>
        </div>
      </>
    )
  }
}

export default connect(state => ({cartItemNumber: getCartItemNumber(state), cart:getCart(state) }))(MiniCart)

// connect(null, { toggleCurrency})(DropDownCur)
//state => ({currentCurrency: getCurrentCurrency(state)})