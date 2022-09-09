import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCart, getCartItemNumber,getTaxAmount, getTotalAmount, getCurrentCurrency } from '../redux/selectors'
import CartItems from '../components/CartItems'
import '../styles/Cart.scss'
import { getShop } from '../redux/selectors'
import { removeFromCart } from '../redux/action'
export class Cart extends Component {
  constructor(props){
    super(props)

    this.removeItem = this.removeItem.bind(this)
  }


  componentDidMount(){
    this.props.closeMiniCart()
  }



  removeItem(payload){
    // STOTRE DISPATCH
    const ShopFilteredArr =  Object.entries(this.props.shop.ItemsByIds).filter((e)=> (e[0]!== payload))
    const newShop = { currentCurrency: this.props.shop.currentCurrency , ItemsByIds: {...Object.fromEntries( ShopFilteredArr )} }
    console.log( 'Cart Page Remove item with Id: ', payload)
    console.log( 'Cart Page Remove item Old Shop with Id: ', this.props.shop)
    console.log( 'Remove item from Shop ShopFiltered: ',  ShopFilteredArr )
    console.log( 'Remove item New Shop Filtered: ', newShop)
    // feed fresh store without deleted id as payload
    this.props.removeFromCart(newShop)  //dispatch ok 
  }



  render() {
    // console.log('Cart Props' , this.props)
    return (
      <div className='cart'>
        <div className='cart__header'>CART</div>
        <hr className='cart__hLine'></hr>
        <div className='cart__content'>
          <CartItems 
          itemsByIds={this.props.itemsByIds}
          removeItem={this.removeItem}
          />
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
            <button className='cart__total--order'>ORDER</button>
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
  getTaxAmount: getTaxAmount(state),
  shop: getShop(state) }),{removeFromCart} )(Cart)