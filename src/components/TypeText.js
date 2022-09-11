import React, { Component} from 'react'
import '../styles/TypeText.scss'

export class Typetext extends  Component {
  constructor(props){
    super(props)
    this.state={selected: '',
                number: ''}

    this.selectAttribute= this.selectAttribute.bind(this)
    this.selectName= this.selectName.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }
    
    
  selectAttribute = (arg , item)=>{
    this.setState(()=>({...this.state, selected: arg, number : item}))
  }

  selectName = (arg)=> {
    switch (this.props.attributes.name){
      case 'Capacity':
        return {'Capacity': arg};
      case 'With USB 3 ports':
        return {'With USB 3 ports': arg};
      case 'Touch ID in keyboard':
        return {'Touch ID in keyboard': arg};
      case 'Size':
        return {'Size': arg};
      default:
    }
  }

  handleClick(item, name){
    this.selectAttribute(this.selectName(item) , item);
    this.props.toggleAttribute( this.selectName(item) )
  }
  
  render() {
    let {name,items} = this.props.attributes
    return (
      <div   className='productDesc__block--variantSize'>
        <div  className='variantSize__label'>{name.toUpperCase()}:</div>
        <div   className='variantSize__options' >
          {items.map( (item,index)=>
          <button key={this.props.productId+index}
            onClick={() => {this.handleClick(index, name) }}
            className={`variantSize__options--Btn ${this.state.number === index ? 'selected' : ''}`}>{`${items[index].displayValue}`}
          </button> )}
  
        </div>
      </div>
    )
  }
}

export default Typetext