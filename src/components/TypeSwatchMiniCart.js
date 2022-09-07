import React, { Component } from 'react'
import '../styles/TypeSwatchMiniCart.scss'


export class TypeSwatchMiniCart extends Component {
  constructor(props){
    super(props)
    // this.state={ ...this.selectName(this.props.attributes.items[0].value)}
    this.state={selected: '',
                number: 0}

    this.selectAttribute= this.selectAttribute.bind(this)
    this.selectName= this.selectName.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    // console.log('TypeSwatch ', this.state)
    // this.props.toggleAttribute( this.state) 
    // this.selectAttribute(this.props.attributes.items[0].value)
  }

  selectAttribute = (arg)=>{
    this.setState({selected: arg})
  }
  
  selectName = (arg)=> {
    switch (this.props.attributes.name){
      case 'Color':
        return {"Color": arg};
      default:
    }
  }

  handleClick(item, name){
    console.log('handle load SWATCH',item)
  
    this.selectAttribute(this.selectName(item));
    this.setState(()=>({number: item} ))
    this.props.toggleAttribute( item )
    
    
    this.props.toggleAttribute( this.selectName(item) )
  }

  render() {
    // console.log('TypeSwatch state', this.state)
    // console.log('TypeSwatch props', this.props)

    let {name,items} = this.props.attributes
    return (
      <div className='miniCartItem__variant--contentSwatch'>
        <div className='variant__swatch--label'>{name.toUpperCase()}:</div>
        <div className='variant__options'>
          {items.map((item,index)=><button 
            key={index}
            onClick={() => {this.handleClick(index, name) }}
            // onClick={() => {this.props.toggleAttribute( this.selectName( item.value ) ); this.selectAttribute(item.value)}}
            className={`variant__options--Btn ${this.state.number === index ? 'selected' : ''}`}
            // className={`variantColor__options--Btn ${this.state.selected === item.value ? 'selected' : ''}`}
            style={{backgroundColor: item.value}}></button>)}
        </div>
      </div>
    )
  }
}

export default TypeSwatchMiniCart