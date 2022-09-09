import React, { Component } from 'react'
import CartItem from './CartItem'
export class CartItems extends Component {
  render() {
    return (
        Object.entries(this.props.itemsByIds)
          .map((item, index, ItemsByIds)=> 
          <CartItem 
            key={index} 
            itemStoreId={item[0]} 
            item={item[1]}
            removeItem={this.props.removeItem}
            />) 

    )
  }
}

export default CartItems
