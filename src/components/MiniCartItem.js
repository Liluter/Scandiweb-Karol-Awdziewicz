import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentCurrency } from '../redux/selectors'
import { addToCartItem} from '../redux/action'
import { currencyNumber } from '../utils/currencyNumber'
import {ReactComponent as Plus} from '../assets/Plus.svg'
import {ReactComponent as Minus} from '../assets/Minus.svg'
import VariantTypesMiniCart from './VariantTypesMiniCart'
import '../styles/MiniCartItem.scss'

export class MiniCartItem extends Component {
  constructor(props) {
    super(props)
    this.state={counter:0}
    this.switchImage = this.switchImage.bind(this)
    this.toCartItemAdd = this.toCartItemAdd.bind(this)
    this.toCartItemSub = this.toCartItemSub.bind(this)
    this.thoggleAttribute = this.toggleAttribute.bind(this)
  }

  switchImage(){
    this.setState((state,props)=>( (state.counter === props.item.product.gallery.length -1) ? {counter: 0 }: {counter: state.counter + 1} ))
  }

  toggleAttribute = (arg) =>{
    this.setState((state,props)=> ({choices: {...arg}  }))
  }

  toCartItemAdd = ( itemStoreId , prev) => {
    console.log('itemStoreId', )
    const amount = true
    this.props.addToCartItem(itemStoreId, amount)
  }
  toCartItemSub = ( itemStoreId , prev) => {
    const amount = false
        if (prev === 1) {
          this.props.removeItem(itemStoreId)
      } else {
        this.props.addToCartItem(itemStoreId, amount)
      }
  }
  
  render() {
    console.log(`MiniCartItem ${this.props.item.product.name} PROPS:`,this.props)

    let {brand, name, prices, gallery} = this.props.item.product
    let price = prices[currencyNumber(this.props.currentCurrency)].currency.symbol + prices[currencyNumber(this.props.currentCurrency)].amount
    return (
      <div className='miniCartItem'> 
        <div className='miniCartItem__variant'>
          <h1 className='miniCartItem__variant--header'>{brand}</h1>
          <h2 className='miniCartItem__variant--name'>{name}</h2>
          <h2 className='miniCartItem__variant--price'>{price}</h2>
          <VariantTypesMiniCart 
          attributes={this.props.item.product.attributes}
          toggleAttribute={this.toggleAttribute}
          itemStoreId= {this.props.itemStoreId}
          item={this.props.item}
          />
        </div>
        <div className='miniCartItem__counter'>
          <button 
          className='miniCartItem__counter--button' 
          onClick={()=>this.toCartItemAdd( this.props.itemStoreId, this.props.item.count)}>
            <Plus/>
          </button>
          <div 
          className='miniCartItem__counter--actualCount'>
            {this.props.item.count}
          </div>
          <button 
          className={`miniCartItem__counter--button ${this.props.item.count === 1 ? 'toDelete' : ''}`} 
          onClick={()=>this.toCartItemSub( this.props.itemStoreId, this.props.item.count)}>
            <Minus className='minus1'/>
            {this.props.item.count === 1 ? <Minus className='minus2' />: null}
          </button>
        
        </div>
        <div className='miniCartItem__photo'>
          <img 
          className='miniCartItem__photo--image'
          src={ gallery[this.state.counter] || '/logo192.png' }
          alt='product_photo'
          onClick={ this.switchImage}
          />
        </div>
      </div>
    )
  }
}

export default connect(state => ({currentCurrency: getCurrentCurrency(state)}) , {addToCartItem} )(MiniCartItem)