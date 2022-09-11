import React, { Component } from 'react'
import { Link , Outlet} from 'react-router-dom'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import { getCurrentCurrency, getCartItemNumber, getCart , getShop, getCurrentCurrencyLabel} from '../redux/selectors'
import { refreshPage } from '../redux/action'
import { connect } from 'react-redux';  
import {ReactComponent as BrandLogo} from '../assets/BrandLogo.svg'
import {ReactComponent as CartIcon} from '../assets/CartIcon.svg'
import {ReactComponent as Caret} from '../assets/CaretUp.svg'
import DropDownCur from './DropDownCur';
import MiniCart from './MiniCart'
import '../styles/Navigation.scss'

const CATEGORIES=gql`
query TakeCategory {
  categories {
    name
  }
}
`
export class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {toggleDropdown: false, 
                  showNumber: false};
    
    this.dropDownMenu = this.dropDownMenu.bind(this);
    this.miniCartMenu = this.miniCartMenu.bind(this);
    this.storage = this.storage.bind(this)
    this.saveStorage = this.saveStorage.bind(this)
  }
  
  componentDidMount(){
    // sessionStorage.clear() // switch comment out to reset
    
    if(!sessionStorage.getItem('Store')){
      this.saveStorage()
    } else {
      this.storage()
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.cartItemNumber !== prevProps.cartItemNumber) {
      this.setState((state)=>({showNumber: !this.state.showNumber }))
    }
    const sessionStorageShop = { currentCurrency: this.props.shop.currentCurrency, currentCurrencyLabel: this.props.shop.currentCurrencyLabel, ItemsByIds: {...this.props.shop.ItemsByIds} }
    sessionStorage.setItem("Store", JSON.stringify(sessionStorageShop))
  }

  storage(){
    const Shop = sessionStorage.getItem('Store');
    this.props.refreshPage(JSON.parse(Shop))
  }
  
  saveStorage(){
    const sessionStorageShop = { currentCurrency: this.props.shop.currentCurrency, currentCurrencyLabel: this.props.shop.currentCurrencyLabel, ItemsByIds: {...this.props.shop.ItemsByIds} }
    sessionStorage.setItem("Store", JSON.stringify(sessionStorageShop))
  }

  dropDownMenu(e){
    this.setState({toggleDropdown: !this.state.toggleDropdown});
  }

  miniCartMenu(){
    this.props.toggleFog
    (this.state.toggleDropdown === true ? this.setState({toggleDropdown: !this.state.toggleDropdown}) : null);
    this.props.toggleMiniCart()
  }

  render() {
    return (
      <>
        <nav className="nav">
          <div className='nav__row'>
            <menu className='nav__menu--cat'>
                <Query query={CATEGORIES} >
                  {({loading, data})=>{
                    if (loading) return "Loading...";
                    const { categories } = data;
                    return (
                      <ul> 
                        { categories.map((cat, index) => (
                        <Link key={index} to={cat.name}>
                          <li  
                          onClick={(e)=> this.props.categorySelect(cat.name)}
                          title={cat.name}
                          aria-label={cat.name}
                          >
                            {(cat.name).toUpperCase()}
                          </li>
                        </Link>))}
                    </ul>)
                  }}
                </Query>
            </menu>
          </div>
          <div className='nav__row'><BrandLogo/></div>
          <div className='nav__row'>
            <menu className='nav__menu--cart' >
              <ul>
                <li 
                onClick={this.dropDownMenu} 
                title={this.props.currentCurrencyLabel}
                >
                  <span>{this.props.currentCurrency}</span>
                  {this.state.toggleDropdown ? <DropDownCur /> : null}
                  </li>
                <li className={this.state.toggleDropdown ? 'caret open' : 'caret'}>
                  <Caret />
                </li>
                <li >
                  <CartIcon 
                  onClick={this.miniCartMenu}
                  />
                  {this.props.cartItemNumber > 0 
                  ? <div className={`cartCounter ${this.state.showNotNumber ? 'showNot' : ''} ${this.state.showNumber ? 'show' : ''}`}>
                    {this.props.cartItemNumber}
                    </div> 
                  : null}
                  {  this.props.miniCart ? <MiniCart toggleFog={this.props.toggleFog} /> : null}
                </li>
              </ul>
            </menu>
          </div>
        </nav>
        <div>
          <Outlet/>
        </div> 
      </>
    )
  }
}
export default connect(state => ({
  currentCurrency: getCurrentCurrency(state),
  currentCurrencyLabel: getCurrentCurrencyLabel(state),
  cartItemNumber: getCartItemNumber(state),  
  ItemsByIds:getCart(state),
  shop: getShop(state)}), {refreshPage} )(Navigation)