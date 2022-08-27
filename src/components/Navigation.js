import React, { Component } from 'react'
import '../styles/Navigation.scss'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import {ReactComponent as BrandLogo} from '../assets/brandLogo.svg'
import {ReactComponent as EmptyCart} from '../assets/emptyCart.svg'
import {ReactComponent as Caret} from '../assets/caretUp.svg'
import DropDownCur from './DropDownCur';

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
                  curentCurrency: "$"};
    
    // this.state = {toggleCart: false};
    this.dropDownMenu = this.dropDownMenu.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
  }
  
  changeCurrency(currency){
    this.setState({curentCurrency: currency})
  }

  dropDownMenu(e){
    this.setState({toggleDropdown: !this.state.toggleDropdown});
  }

  render() {
    return (
      <nav className="navbar">
        <div className='nav-row'>
          <menu className='nav-menu__cat'>
              <Query query={CATEGORIES} >
                {({loading, data})=>{
                  if (loading) return "Loading...";
                  const { categories } = data;
                  return (<ul>{categories.map((cat, index) => <li key={index} >{(cat.name).toUpperCase()}</li>)}</ul>)
                }}
              </Query>
          </menu>
        </div>
        <div className='nav-row'><BrandLogo/></div>
        <div className='nav-row'>
          <menu className='nav-menu__cart' >
            <ul>
              <li onClick={this.dropDownMenu} >
                <span>{this.state.curentCurrency}</span>
                {this.state.toggleDropdown ? <DropDownCur changeCurrency={this.changeCurrency}/> : null}
                </li>
              <li className={this.state.toggleDropdown ? 'caret open' : 'caret'}><Caret /></li>
              <li><EmptyCart/></li>
            </ul>
          </menu>
        </div>
      </nav> 
    )
  }
}

export default Navigation
