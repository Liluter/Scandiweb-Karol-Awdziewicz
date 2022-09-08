import React, { Component } from 'react'
import '../styles/Cart.scss'
import { Link } from 'react-router-dom'
import CartItems from '../components/CartItems'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber,getTaxAmount, getTotalAmount, getCurrentCurrency } from '../redux/selectors'


export class Cart extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.closeMiniCart()
  }




  render() {
    console.log('Cart Props' , this.props)
    return (
      <div className='cart'>
        <div className='cart__header'>CART</div>
        <hr className='cart__hLine'></hr>
        <div className='miniCart__content'>
          <CartItems itemsByIds={this.props.itemsByIds}/>
          CartItems
        </div>

        <div className='cart__total'>
            <div className='cart__total--list'>
              <ul>
                <li className='label'>Tax 21%:  </li>
                <li className='label'>Quantity:</li> 
                <li className='amount'>Total: </li>
              </ul>
              <ul>
                <li className='label--bold'>{this.props.currentCurrency}{this.props.getTaxAmount}</li>
                <li className='label--bold'>{this.props.cartItemNumber}</li>
                <li className='label--bold--amount'>{this.props.currentCurrency}{this.props.getTotalAmount}</li>
              </ul>
            </div>
            <bitton className='cart__total--order'>ORDER</bitton>
        </div>
      </div>
    )
  }
}


export default connect(state => ({
  cartItemNumber: getCartItemNumber(state), 
  itemsByIds: getCart(state), 
  getTotalAmount:  getTotalAmount(state) , 
  currentCurrency: getCurrentCurrency(state),
  getTaxAmount: getTaxAmount(state) }))(Cart)