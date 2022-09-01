import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import {ReactComponent as BrandLogo} from '../assets/brandLogo.svg'
import {ReactComponent as CartIcon} from '../assets/CartIcon.svg'
import {ReactComponent as Caret} from '../assets/caretUp.svg'
import DropDownCur from './DropDownCur';
import '../styles/Navigation.scss'

import { connect } from 'react-redux';  
// import { addTodo } from '../redux/action' // action dispaych
import { getCurrentCurrency } from '../redux/selectors'

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
                //  currentCurency: "$", turn off from props
                  cartCounter: "3",
                  input: 'input'}; // redux
    
    // this.state = {toggleCart: false};
    this.dropDownMenu = this.dropDownMenu.bind(this);
    
    // this.changeCurrency = this.changeCurrency.bind(this);
  }
  


  componentDidMount(){
    console.log('Navigation mount',this.props);
    console.log('Navigation state',this.state);
  }
    componentDidUpdate(){
      console.log('Navigation mount',this.props);
      console.log('Navigation state',this.state);
    }
  changeCurrency(currency){
    this.setState({currentCurency: currency})
  }

  dropDownMenu(e){
    this.setState({toggleDropdown: !this.state.toggleDropdown});
  }

  render() {
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
                <span>{this.props.currentCurency}</span>
                {this.state.toggleDropdown ? <DropDownCur changeCurrency={this.props.changeCurrency}/> : null}
                </li>
              <li className={this.state.toggleDropdown ? 'caret open' : 'caret'}><Caret /></li>
              <li >
                <CartIcon/>
                {this.state.cartCounter > 0 ? <div className='cartCounter'>{this.state.cartCounter}</div> : null}
              </li>
            </ul>
          </menu>
        </div>
      </nav> 
    )
  }
}
           //redux HOC State  Dispatch  Component
export default connect(state => ({currencyProp: getCurrentCurrency(state)}) )(Navigation)
