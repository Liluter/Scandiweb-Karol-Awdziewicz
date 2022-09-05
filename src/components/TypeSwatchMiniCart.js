import React, { Component } from 'react'
import '../styles/TypeSwatch.scss'


export class TypeSwatchMiniCart extends Component {
  constructor(props){
    super(props)
    this.state={ ...this.selectName(this.props.attributes.items[0].value)}
    // this.state={ selected: '' || this.props.attributes.items[0].value}

    this.selectAttribute= this.selectAttribute.bind(this)
    this.selectName= this.selectName.bind(this)
  }

  componentDidMount(){
    // console.log('TypeSwatch ', this.state)
    this.props.toggleAttribute( this.state) 
    this.selectAttribute(this.props.attributes.items[0].value)
  }

  selectAttribute = (arg)=>{
    this.setState({selected: arg})
  }
  
  selectName = (arg)=> {
    switch (this.props.attributes.name){
      case 'Color':
        return {color: arg};
      default:
    }
  }


  render() {
    // console.log('TypeSwatch state', this.state)
    // console.log('TypeSwatch props', this.props)

    let {name,items} = this.props.attributes
    return (
      <div className='productDesc__block--variantColor'>
        <div className='variantColor__label'>{name.toUpperCase()}:</div>
        <div className='variantColor__options'>
          {items.map((item,index)=><button 
            key={index}
            onClick={() => {this.props.toggleAttribute( this.selectName( item.value ) ); this.selectAttribute(item.value)}}
            className={`variantColor__options--Btn ${this.state.selected === item.value ? 'selected' : ''}`}
            style={{backgroundColor: item.value}}></button>)}
        </div>
      </div>
    )
  }
}

export default TypeSwatchMiniCart
