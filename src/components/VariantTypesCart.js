import React, { Component } from 'react'

// import TypeTextMiniCart from './TypeTextMiniCart'
import TypeTextCart from './TypeTextCart'
// import TypeSwatchMiniCart from './TypeSwatchMiniCart'
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
    // console.log('VariantTypeMiniCart props',this.props)
    return (
        <>
        {attributes.map((attr, index)=> this.selectType(attr.type, attr, index))}
          
        </>
    )
  }
}

export default VariantTypesCart
