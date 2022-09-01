import React, { Component } from 'react'
import '../styles/ProductCard.scss'
import {ReactComponent as ToCartBtn} from '../assets/toCartBtnIcon.svg'
import {currencyNumber} from '../utils/currencyNumber'

export class ProductCard extends Component {
  constructor(props){
    super(props);
    this.state = {showBtn: false};
    this.toggleShowBtn = this.toggleShowBtn.bind(this);
    
  }

  // componentDidMount(){
  //   // console.log('Product Card mount', this.props);
  // }
  
  // componentDidUpdate(){
  //   console.log(currencyNumber(this.props.currentCurency));
  //   // console.log("Currency symbol func'", (this.currencySymbol() ))
  // }
  
  toggleShowBtn() {
    this.setState( {showBtn: !this.state.showBtn} )
  }



  render() {
    return (
      <div className={'productCard'} onMouseEnter={this.toggleShowBtn }
      onMouseLeave={this.toggleShowBtn }>
        <img className='productCard__image' src={this.props.product.gallery[0]}  alt={this.props.product.name}/>
        <div className='productCard__Btn'>{ this.state.showBtn ? <div className='productCard__Btn--pushToCart'><ToCartBtn /></div> : null}</div>
        <p className='productCard__name'>{this.props.product.name}</p>
        <p className='productCard__price'>{ this.props.product.prices[currencyNumber(this.props.currentCurency)].currency.symbol }{this.props.product.prices[currencyNumber(this.props.currentCurency)].amount}</p>
      </div>
    )
  }
}

export default ProductCard

//{()=> this.props.changeCurrency(curr.symbol)}