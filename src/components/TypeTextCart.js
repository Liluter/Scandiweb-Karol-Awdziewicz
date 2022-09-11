import React, { Component } from 'react'
import '../styles/TypeTextCart.scss'

export class TypeTextCart extends  Component {
  constructor(props){
    super(props)
    this.state={selected: '',
                number: 0}
  }

  render() {
    let {name,items} = this.props.attributes
    return (
      <div   className='CartItem__variant--contentText'>
        <div  className='variant__label'>{name.toUpperCase()}:</div>
        <div   className='variant__options' >
          {items.map((item,index,arr)=>
          (<button key={index}
            title={items[index].displayValue}
            className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}>{items[index].displayValue}
          </button>) )}
        </div>
      </div>
    )
  }
}

export default TypeTextCart