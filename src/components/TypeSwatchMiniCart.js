import React, { Component } from 'react'

export class TypeSwatchMiniCart extends Component {
  constructor(props){
    super(props)
    this.state = {selected: '', 
                  number: 0 }
  }
  render() {
    let {name,items} = this.props.attributes
    return (
      <div className='miniCartItem__variant--contentSwatch'>
        <div className='variant__swatch--label'>{name.toUpperCase()}:</div>
        <div className='variant__options'>
          {items.map((item,index)=><button 
            key={index}
            className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}
            style={{backgroundColor: item.value}}></button>)}
        </div>
      </div>
    )
  }
}

export default TypeSwatchMiniCart