import React, { Component } from 'react'
// import '../styles/TypeText.scss'
import '../styles/TypeTextCart.scss'
// import TypeTextOptions from './TypeTextOptions'

export class TypeTextCart extends  Component {
  constructor(props){
    super(props)
    this.state={selected: '',
                number: 0}

    // this.selectAttribute= this.selectAttribute.bind(this)  //not necessary
    // this.selectName= this.selectName.bind(this)  //not necessary
    // this.handleClick = this.handleClick.bind(this)  //not necessary
    // this.handleSelect = this.handleSelect.bind(this)  //not necessary
    // this.shortName = this.shortName.bind(this)   //not necessary
    // this.selectSize = this.selectSize.bind(this)
      //this.selectName(this.props.attributes.items[0].displayValue)
  }
  
  // shortName(input){
  //   return (input.length <= 2) ? input : input.slice(0,1)
  // }
    
  //not necessary
  
  // selectAttribute = (arg)=>{
  //   this.setState(()=>({...this.state, selected: arg,}))
  // }
  // selectName = (arg)=> {
  //   switch (this.props.attributes.name){
  //     case 'Capacity':
  //       return {'Capacity': arg};
  //     case 'With USB 3 ports':
  //       return {'With USB 3 ports': arg};
  //     case 'Touch ID in keyboard':
  //       return {'Touch ID in keyboard': arg};
  //     case 'Size':
  //       return {'Size': arg};
  //     default:
  //   }
  // }
  // handleSelect(){
  //   this.props.toggleAttribute( this.state.selected )
  // }
  // handleClick(item, name){
  //   this.selectAttribute(this.selectName(item))
  //   this.setState(()=>({number: item} ))
  //   this.props.toggleAttribute( item )
  
  //   this.props.toggleAttribute( this.selectName(item) )
  // }
  
  render() {
    
    // console.log('TypeTextMiniCart props:', this.props)
    // console.log('TypeText state', this.state)
    // console.log((this.state.selected.Size !== this.props.attributes.items[0].displayValue))
    // console.log('Props attributes', this.props)
    // console.log(this.props.attributes.items[0].displayValue)
    // console.log('PDP block type text state :',this.state)
    let {name,items} = this.props.attributes
    
    // console.log('items :',items)
    // console.log('attributes !!!:',this.state)
    // console.log('Obj val :', Object.values(this.state.selected)[0])
    return (
      <div   className='CartItem__variant--contentText'>
        <div  className='variant__label'>{name.toUpperCase()}:</div>
        <div   className='variant__options' >
          {items.map((item,index,arr)=>
          (<button key={index}
            title={items[index].displayValue}
            // onClick={() => {this.handleClick(index, name) }} //not necessary
            className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}>{items[index].displayValue}
            {/* className={`variant__options--Btn ${this.props.item.product.choices[name] === index ? 'selected' : ''}`}>{this.shortName(items[index].displayValue)} */}
            {/* className={`variant__options--Btn ${this.state.number === index ? 'selected' : ''}`}>{this.shortName(items[index].displayValue)} */}
          </button>) )}
  
        </div>
      </div>
    )
  }
}

export default TypeTextCart

//${Object.values(this.state.selected)[0] === item.displayValue ? 'selected' : ''}