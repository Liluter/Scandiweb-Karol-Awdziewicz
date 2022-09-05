import React, { Component } from 'react'
import MiniCartItem from './MiniCartItem'
export class MiniCartItems extends Component {
  render() {
    // console.log('MiniCartItems',this.props.cart)
    return (

      this.props.cart.map((item, index)=> <MiniCartItem key={index} item={item}/>) 
      
    )
  }
}

export default MiniCartItems
