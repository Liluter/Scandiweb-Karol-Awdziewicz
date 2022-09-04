import React, { Component } from 'react'
import '../styles/MiniCart.scss'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber } from '../redux/selectors'


export class MiniCart extends Component {
  render() {
    let cartItemNumber = this.props.cartItemNumber;
    console.log('minicart props',this.props)
    return (
      <div className='miniCart'>
        <div className='miniCart__header'> <b className='miniCart__header--bold'>My Bag</b>, {cartItemNumber} items</div>
        <div className='miniCart__content'> {this.props.cart.map((item, index)=> <p key={index}>{item.name}</p> )}</div>
        <div className='miniCart__footer'> My Bag, 3 items</div>
      </div>
    )
  }
}

export default connect(state => ({cartItemNumber: getCartItemNumber(state), cart:getCart(state) }))(MiniCart)

// connect(null, { toggleCurrency})(DropDownCur)
//state => ({currentCurrency: getCurrentCurrency(state)})