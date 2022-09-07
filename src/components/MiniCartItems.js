import React, { Component } from 'react'
import MiniCartItem from './MiniCartItem'
export class MiniCartItems extends Component {
  render() {
    // console.log('MiniCartItems push to map', Object.entries(this.props.itemsByIds))
    return (

      Object.entries(this.props.itemsByIds).map((item, index, ItemsByIds)=> <MiniCartItem key={index} itemStoreId={item[0]} item={item[1]}   />) 
      
    )
  }
}
//["1",{...}]
//["2",{...}]
//["3",{...}]
export default MiniCartItems
