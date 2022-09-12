import React, { Component } from 'react'
import {ReactComponent as ToCartBtn} from '../assets/CartIcon2.svg'
import {currencyNumber} from '../utils/currencyNumber'
import { connect } from 'react-redux'
import { getCurrentCurrency } from '../redux/selectors'
import { Link } from 'react-router-dom'


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
    let price =   this.props.product.prices[currencyNumber(this.props.currentCurrency)].currency.symbol + this.props.product.prices[currencyNumber(this.props.currentCurrency)].amount
    return (
      <div className={'productCard'} onMouseEnter={this.toggleShowBtn }
      onMouseLeave={this.toggleShowBtn }>
        <Link to={`/${this.props.product.category}/${this.props.product.id}`}>
          <img className={`productCard__image ${this.props.product.inStock ? null : 'outOfStock'}`} src={this.props.product.gallery[0]}  title={this.props.product.name} alt={this.props.product.name}/>
        <div className='productCard__stockStatus'>{this.props.product.inStock ? null : <div className='productCard__stockStatus--showStatus'>OUT OF STOCK</div>}</div>
        </Link>
        <div className='productCard__Btn'>
          { this.state.showBtn 
          ? ( this.props.product.inStock 
            ?  <Link to={`/${this.props.product.category}/${this.props.product.id}`}> <div className='productCard__Btn--pushToCart'><ToCartBtn /></div></Link>   : null) : null}
        </div>
        <p className={`productCard__name ${this.props.product.inStock ? null : 'outOfStock'}`}>{this.props.product.name}</p>
        <p className={`productCard__price ${this.props.product.inStock ? null : 'outOfStock'}`}>{ price }</p>
      </div>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) )(ProductCard)