import React, { Component } from 'react'
// import TypeText from './TypeText'
// import TypeSwatch from './TypeSwatch'
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
        // toggleAttribute={this.props.toggleAttribute}
        />
      case 'text':
        return <TypeTextMiniCart 
        key={index} 
        attributes={attr} 
        // toggleAttribute={this.props.toggleAttribute}
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

export default VariantTypesMiniCart
