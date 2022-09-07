import React, { Component } from 'react'
import TypeText from './TypeText'
import TypeSwatch from './TypeSwatch'


export class VariantTypes extends Component {
  constructor(params) {
    super(params)
    this.state={attributes: this.props.attributes}
    this.selectType = this.selectType.bind(this)
  }
  selectType(type, attr,index){
    // console.log("switch: ",attr)
    switch (type) {
      case 'swatch': 
        return <TypeSwatch 
        // key={this.props.productId+index} 
        productId={this.props.productId} 
        attributes={attr} 
        toggleAttribute={this.props.toggleAttribute}/>
      case 'text':
        return <TypeText 
        // key={this.props.productId+index} 
        productId={this.props.productId} 
        attributes={attr} 
        toggleAttribute={this.props.toggleAttribute}/>
      default:
        break;
    }
  }

  render() {
    // let attributes = this.props.attributes
    // console.log('VariantType',this.props)
    // console.log("Let attributes",attributes)
    return (
        <div 
        key={this.props.productId}
        >
        {this.props.attributes.map((attr, index, arr)=><div key={index + this.props.productId}> {this.selectType(attr.type, attr,index)}</div>)}
          
        </div>
    )
  }        
}

export default VariantTypes

//attributes.filter((e) => e.name === "Size" ).length > 0 ? 'Has Size attribute'  : "Hasn't Size attribute")