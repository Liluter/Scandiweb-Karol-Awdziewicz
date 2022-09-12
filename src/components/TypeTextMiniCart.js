import React, { Component } from 'react'

export class TypeTextMiniCart extends  Component {
  constructor(props){
    super(props)
    this.state={selected: '',
                number: 0}

    this.shortName = this.shortName.bind(this)
  }
  
  shortName(input){
    return (input.length <= 2) ? input : input.slice(0,1)
  }
  
  render() {
    let {name,items} = this.props.attributes
    return (
      <div   className='miniCartItem__variant--contentText'>
        <div  className='variant__label'>{name.toUpperCase()}:</div>
        <div   className='variant__options' >
          {items.map((item,index,arr)=>
          (<button key={index}
            title={items[index].displayValue}
            className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}>{this.shortName(items[index].displayValue)}
          </button>) )}
  
        </div>
      </div>
    )
  }
}

export default TypeTextMiniCart