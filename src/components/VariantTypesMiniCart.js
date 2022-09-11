import React, { Component } from 'react'
import TypeTextMiniCart from './TypeTextMiniCart'
import TypeSwatchMiniCart from './TypeSwatchMiniCart'

export class VariantTypesMiniCart extends Component {
  constructor(params) {
    super(params)
    this.selectType = this.selectType.bind(this)
  }
  selectType(type, attr,index){
    switch (type) {
      case 'swatch': 
        return <TypeSwatchMiniCart
        key={index} 
        attributes={attr} 
        toggleAttribute={this.props.toggleAttribute}
        itemStoreId= {this.props.itemStoreId}
        item={this.props.item}
        />
      case 'text':
        return <TypeTextMiniCart 
        key={index} 
        attributes={attr} 
        toggleAttribute={this.props.toggleAttribute}
        itemStoreId= {this.props.itemStoreId}
        item={this.props.item}
        />
      default:
        break;
    }
  }

  render() {
    let attributes = this.props.attributes
    return (
        <>
        {attributes.map((attr, index)=> this.selectType(attr.type, attr, index))}
          
        </>
    )
  }
}

export default VariantTypesMiniCart
