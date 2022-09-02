import React, { Component } from 'react'

import '../styles/ThumbsBlock.scss'

export class ThumbsBlock extends Component {

  render() {
    return (
      <aside className='productDesc__thumbs'>
        <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
        <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
        <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
      </aside>
    )
  }
}

export default ThumbsBlock
