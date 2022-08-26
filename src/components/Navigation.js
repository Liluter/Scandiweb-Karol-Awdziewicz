import React, { Component } from 'react'
import '../styles/Navigation.scss'
import Logo from './Logo'

export class Navigation extends Component {
  render() {
    return (
      <navigation className={"Navbar"}>
        <div className='nav-row'>
          <menu className='nav-menu__cat'>
            <ul>
              <li><span>WOMEN</span></li>
              <li><span>MEN</span></li>
              <li><span>KIDS</span></li>
            </ul>
          </menu>
        </div>
        <div className='nav-row'><Logo/></div>
        <div className='nav-row'>
          <menu className='nav-menu__cart'>
          <ul>
              <li><span>CUR</span></li>
              <li><span>CART</span></li>
            </ul>
          </menu>
        </div>

      </navigation>
    )
  }
}

export default Navigation
