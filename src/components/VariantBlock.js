import React, { Component } from 'react'
import { connect } from 'react-redux';  
import { addToCart } from '../redux/action';
import { getCurrentCurrency } from '../redux/selectors'
import { currencyNumber } from '../utils/currencyNumber';
import Description from './Description';
import VariantTypes from './VariantTypes';
import '../styles/VariantBlock.scss'

export class VariantBlock extends Component {
  constructor(props){
    super(props)
    this.state = { choices: {},
                    count: 1,
                  alert:false }

    this.handleClick = this.handleClick.bind(this)
    this.showAlert = this.showAlert.bind(this)
  }

  toggleAttribute = (arg) =>{
    this.setState(()=> (  { ...this.state, choices: {...this.state.choices, ...arg} }  ))
  }

  handleClick = (payload) => {
    if (Object.entries(this.state.choices).length > 0){
      this.props.addToCart(payload)
    } else {
      console.log('MAKE SELECTION FIRST')
      this.setState({alert: true})
    }
  }
  
  showAlert(){
    if (this.state.alert) {
      setTimeout(()=>{ this.setState({alert: false})},4000)
      
      return (
        <div className='alert'>PLEASE SELECT ATTRIBUTE</div>
      )
    }
  }

  render() {
    let { brand, name ,inStock , prices, description, id} = this.props.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol 
    + this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount
    
    return (
      <aside  className='productDesc__block'>
        <h1 className='productDesc__block--header'>{brand}</h1>
        <h2 className='productDesc__block--name'>{name}</h2>
        <VariantTypes  productId={id} attributes={this.props.product.attributes} toggleAttribute={this.toggleAttribute}/>
        <div className='productDesc__block--price'>
          <div className='price__label'>PRICE:</div>
          <div className='price__amount'>
            {price}
          </div>
        </div>
        <button 
          className={`productDesc__block--button ${inStock ? '' : 'notInStock'}`}
          onClick={()=> ( inStock ? this.handleClick({...this.state, ...this.props.product}) : null  )} >
          {inStock ? 'ADD TO CART' : 'NOT IN STOCK' }
            {this.showAlert()}
        </button>
        <footer className='productDesc__block--footer' >
          <Description description={description}/>
        </footer>
      </aside>
    )
  }
}

export default connect(state => 
  ({currentCurrency: getCurrentCurrency(state)}),
  {addToCart} )(VariantBlock)
