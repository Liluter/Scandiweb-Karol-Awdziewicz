import React, { Component } from 'react'
import '../styles/ProductCard.scss'
import {ReactComponent as ToCartBtn} from '../assets/toCartBtnIcon.svg'

export class ProductCard extends Component {
  constructor(props){
    super(props);
    this.state = {showBtn: false};
    this.toggleShowBtn = this.toggleShowBtn.bind(this);
  }

  toggleShowBtn() {
    this.setState( {showBtn: !this.state.showBtn} )
  }


  render() {
    return (
      <div className={'productCard'} onMouseEnter={this.toggleShowBtn }
      onMouseLeave={this.toggleShowBtn }>
        <img src='logo512.png ' className='productCard__image' alt='Product'/>
        <div className='productCard__Btn'>{ this.state.showBtn ? <div className='productCard__Btn--pushToCart'><ToCartBtn /></div> : null}</div>
        <p className='productCard__name'>Apollo Running Short</p>
        <p className='productCard__price'>$50.00</p>
      </div>
    )
  }
}

export default ProductCard