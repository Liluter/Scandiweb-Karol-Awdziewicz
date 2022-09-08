import React, { Component } from 'react'

import '../styles/VariantBlock.scss'

import { connect } from 'react-redux';  
import { getCurrentCurrency } from '../redux/selectors'
import { addToCart } from '../redux/action';
import { currencyNumber } from '../utils/currencyNumber';
import Description from './Description';
import VariantTypes from './VariantTypes';
// import Typetext from './TypeText';


export class VariantBlock extends Component {
  constructor(props){
    super(props)
    this.state = { choices: {},
                    count: 1 }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    // console.log('monunted !!!! ', this.state.name, this.state.counter)
    // this.setState(()=>({...this.state}))

  }




    //     ...state,
    //     allIds: [...state.allIds, id],
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         content,
    //         completed: false
    //       }
    //     }
    //   };


// attributes: this.props.product.attributes
  toggleAttribute = (arg) =>{
    this.setState(()=> (  { ...this.state, choices: {...this.state.choices, ...arg} }  ))
    console.log('toggleAttribute activated temporarrySet :', this.state.choices)
  }
  // to redux
  handleClick = (payload) => {
    this.props.addToCart(payload)
  }
  

  render() {
    // console.log('VariantBloc state',this.state)
    let { brand, name ,inStock , prices, description, id} = this.props.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount
    // console.log('product :',this.props.product)
    console.log('Variant block state: !!!!!! :', this.state)
    // console.log('Variant block props: :', this.props)
    // console.log(attributes)
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
          onClick={()=> {  this.handleClick({...this.state, ...this.props.product})  }} >
          {inStock ? 'ADD TO CART' : 'NOT IN STOCK' }
        </button>

        <footer className='productDesc__block--footer' >
          <Description description={description}/>
        </footer>
        
      </aside>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}), {addToCart} )(VariantBlock)
//export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) )(Navigation)
// { this.props.product.prices[currencyNumber(this.props.currentCurrency)].currency.symbol }{this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount}
