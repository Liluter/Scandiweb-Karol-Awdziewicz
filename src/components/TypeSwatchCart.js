import React, { Component } from 'react'
import '../styles/TypeSwatchCart.scss'


export class TypeSwatchCart extends Component {
  constructor(props){
    super(props)
    // this.state={ ...this.selectName(this.props.attributes.items[0].value)}
    this.state = {selected: '', 
                  number: 0 }
                
    // this.selectAttribute= this.selectAttribute.bind(this) // //not necessary
    // this.selectName= this.selectName.bind(this) //not necessary
    // this.handleClick = this.handleClick.bind(this) //not necessary
  }

  //not necessary selecting attribute in mini cart//
  
  // selectAttribute = (arg)=>{
  //   this.setState(()=>({...this.state, selected: arg,}))
  // }
  // selectName = (arg)=> {
  //   switch (this.props.attributes.name){
  //     case 'Color':
  //       return {"Color": arg};
  //     default:
  //   }
  // }
  // handleClick(item, name){
  //   // console.log('handle load SWATCH',item)
  
  //   this.selectAttribute(this.selectName(item));
  //   this.setState(()=>({number: item} ))
  //   this.props.toggleAttribute( item )
    
    
  //   this.props.toggleAttribute( this.selectName(item) )
  // }

  render() {
    // console.log('TypeSwatch state', this.state)
    // console.log('TypeSwatch props', this.props)

    let {name,items} = this.props.attributes
    return (
      <div className='CartItem__variant--contentSwatch'>
        <div className='variant__swatch--label'>{name.toUpperCase()}:</div>
        <div className='variant__options'>
          {items.map((item,index)=><button 
            key={index}
            // onClick={() => {this.handleClick(index, name) }}  //not necessary
            className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}

            // className={`variant__options--Btn ${this.state.number === index ? 'selected' : ''}`}
            // onClick={() => {this.props.toggleAttribute( this.selectName( item.value ) ); this.selectAttribute(item.value)}}
            // className={`variantColor__options--Btn ${this.state.selected === item.value ? 'selected' : ''}`}
            style={{backgroundColor: item.value}}></button>)}
        </div>
      </div>
    )
  }
}

export default TypeSwatchCart