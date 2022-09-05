import React, { Component } from 'react'
import TypeText from './TypeText'
import TypeSwatch from './TypeSwatch'


export class VariantTypesMiniCart extends Component {
  constructor(params) {
    super(params)
    this.selectType = this.selectType.bind(this)
  }
  selectType(type, attr,index){
    switch (type) {
      case 'swatch': 
        return <TypeSwatch key={attr.id} attributes={attr} toggleAttribute={this.props.toggleAttribute}/>
      case 'text':
        return <TypeText key={attr.id} attributes={attr} toggleAttribute={this.props.toggleAttribute}/>
      default:
        break;
    }
  }

  render() {
    let attributes = this.props.attributes
    // console.log('VariantType',attributes)
    return (
        <>
        {attributes.map((attr, index)=> this.selectType(attr.type, attr,index))}
          
        </>
    )
  }
}

export default VariantTypesMiniCart
