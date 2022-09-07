import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import {ReactComponent as BrandLogo} from '../assets/brandLogo.svg'
import {ReactComponent as CartIcon} from '../assets/CartIcon.svg'
import {ReactComponent as Caret} from '../assets/caretUp.svg'
import DropDownCur from './DropDownCur';
import MiniCart from './MiniCart'
import '../styles/Navigation.scss'

import { connect } from 'react-redux';  
// import { addTodo } from '../redux/action' // action dispaych
import { getCurrentCurrency, getCart } from '../redux/selectors'

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
                  // toggleMiniCart: false,
                  // cartCounter: (props.cart).length}
                                                      };
    
    this.dropDownMenu = this.dropDownMenu.bind(this);
    this.miniCartMenu = this.miniCartMenu.bind(this);
    // console.log('constructor state, props',this.state,props)
  }
  

  componentDidMount(){
  // this.setState(()=>({cartCounter: this.props.cart).length})) //????
  
  }

  dropDownMenu(e){
    // console.log('object properties  ', Object.keys(this.props.ItemsByIds).length )
    this.setState({toggleDropdown: !this.state.toggleDropdown});
    this.timer = setTimeout( () => this.setState({toggleDropdown: false}),5000)
  }

  

  miniCartMenu(e){
    // this.setState({toggleMiniCart: !this.state.toggleMiniCart})
    this.props.toggleFog
    (this.state.toggleDropdown === true ? this.setState({toggleDropdown: !this.state.toggleDropdown}) : null);
    this.props.toggleMiniCart()
  }

  render() {
    // console.log('nav cout cart props state ',this.props  )
    // this.props.miniCart ? console.log('TRUE' ) : console.log('FALSE')
    return (
      <nav className="nav">
        <div className='nav__row'>
          <menu className='nav__menu--cat'>
              <Query query={CATEGORIES} >
                {({loading, data})=>{
                  if (loading) return "Loading...";
                  const { categories } = data;
                  return (<ul>{ categories.map((cat, index) => (
                      <Link key={index} to={cat.name}><li  onClick={(e)=> this.props.categorySelect(cat.name)} >{(cat.name).toUpperCase()}</li></Link>
                    )) }</ul>)
                }}
              </Query>
          </menu>
        </div>
        <div className='nav__row'><BrandLogo/></div>
        <div className='nav__row'>
          <menu className='nav__menu--cart' >
            <ul>
              <li onClick={this.dropDownMenu} >
                <span>{this.props.currentCurrency}</span>
                {this.state.toggleDropdown ? <DropDownCur /> : null}
                </li>
              <li className={this.state.toggleDropdown ? 'caret open' : 'caret'}><Caret /></li>
              <li >
                <CartIcon onClick={this.miniCartMenu}/>
                {Object.keys(this.props.ItemsByIds).length > 0 ? <div className='cartCounter'>{Object.keys(this.props.ItemsByIds).length}</div> : null}
                {/* {this.props.cart.length > 0 ? <div className='cartCounter'>{this.props.length}</div> : null} */}
                {  this.props.miniCart ? <MiniCart toggleFog={this.props.toggleFog}/> : null}
              </li>
            </ul>
          </menu>
        </div>
      </nav> 
    )
  }
}
           //redux HOC State  Dispatch  Component
export default connect(state => ({currentCurrency: getCurrentCurrency(state) , ItemsByIds:getCart(state)}) )(Navigation)
//changeCurrency={this.props.changeCurrency} dr