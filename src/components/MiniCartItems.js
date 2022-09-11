import React, { Component } from 'react'
import MiniCartItem from './MiniCartItem'
export class MiniCartItems extends Component {
  render() {
    return (
    Object.entries(this.props.itemsByIds)
      .map((item, index)=> 
        <MiniCartItem 
        key={index} 
        itemStoreId={item[0]} 
        item={item[1]}
        removeItem={this.props.removeItem}
        />) 
      
    )
  }
}
export default MiniCartItems
