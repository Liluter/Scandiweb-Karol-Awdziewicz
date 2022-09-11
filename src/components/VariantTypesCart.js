import React, { Component } from 'react'
import TypeTextCart from './TypeTextCart'
import TypeSwatchCart from './TypeSwatchCart'

export class VariantTypesCart extends Component {
  constructor(params) {
    super(params)
    this.selectType = this.selectType.bind(this)
  }
  selectType(type, attr,index){
    switch (type) {
      case 'swatch': 
        return <TypeSwatchCart
        key={index} 
        attributes={attr} 
        toggleAttribute={this.props.toggleAttribute}
        itemStoreId= {this.props.itemStoreId}
        item={this.props.item}
        />
      case 'text':
        return <TypeTextCart 
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

export default VariantTypesCart
