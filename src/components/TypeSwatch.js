import React, { Component } from 'react'


export class TypeSwatch extends Component {
  constructor(props){
    super(props)
    this.state={selected: '',
                number: ''}

    this.selectAttribute= this.selectAttribute.bind(this)
    this.selectName= this.selectName.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  selectAttribute = (arg, item)=>{
    this.setState(()=>({...this.state, selected: arg, number: item}))
  }
  
  selectName = (arg)=> {
    switch (this.props.attributes.name){
      case "Color":
        return {Color: arg};
      default:
    }
  }

  handleClick(index){
    this.selectAttribute(this.selectName(index) , index);
    this.props.toggleAttribute( this.selectName(index) )
  }

  render() {
    let {name,items} = this.props.attributes
    return (
      <div className='productDesc__block--variantColor'>
        <div className='variantColor__label'>{name.toUpperCase()}:</div>
        <div className='variantColor__options'>
          {items.map((item,index)=>
          <button 
            key={index}
            onClick={() => {this.handleClick(index) }}
            className={`variantColor__options--Btn ${this.state.number === index ? 'selected' : ''}`}
            style={{backgroundColor: item.value}}>
          </button>)}
        </div>
      </div>
    )
  }
}

export default TypeSwatch