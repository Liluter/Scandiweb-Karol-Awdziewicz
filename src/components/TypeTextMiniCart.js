import React, { Component } from 'react'
import '../styles/TypeText.scss'

export class TypeTextMiniCart extends Component {
  constructor(props){
    super(props)
    //selected: '' || this.props.attributes.items[0].displayValue
    this.selectAttribute= this.selectAttribute.bind(this)
    this.selectName= this.selectName.bind(this)
    // this.firstSet = this.firstSet.bind(this)
    this.state={ ...this.selectName(this.props.attributes.items[0].displayValue)}
  }
  componentDidMount(){
    // console.log('TypeText state', this.state)
    this.props.toggleAttribute( this.state )
    this.selectAttribute(this.props.attributes.items[0].displayValue)
  }


  selectAttribute = (arg)=>{
    this.setState({selected: arg})
  }
  // firstSet=()=>{
  //   this.setState( (state,props)=>  ( { ...this.selectName(props.attributes.items[0].displayValue) })   )
  //   // console.log(' firstSet', this.state)
  // }

  selectName = (arg)=> {
    switch (this.props.attributes.name){
      case 'Capacity':
        return {capacity: arg};
      case 'With USB 3 ports':
        return {'With USB 3 ports': arg};
      case 'Touch ID in keyboard':
        return {'Touch ID in keyboard': arg};
      case 'Size':
        return {'Size': arg};
      default:
    }
  }

  render() {
    // console.log('state',this.state)
    let {name,items} = this.props.attributes
    return (
      <div className='productDesc__block--variantSize'>
        <div className='variantSize__label'>{name.toUpperCase()}:</div>
        <div className='variantSize__options' >
          {items.map((item,index)=><button 
            key={index}
            onClick={() => {this.props.toggleAttribute( this.selectName(item.displayValue) ); this.selectAttribute(item.displayValue)}}
            className={`variantSize__options--Btn ${this.state.selected === item.displayValue ? 'selected' : ''}`}>{item.displayValue}</button>)}
        </div>
      </div>
    )
  }
}

export default TypeTextMiniCart
