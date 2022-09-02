import React, { Component } from 'react'

import '../styles/ThumbsBlock.scss'

export class ThumbsBlock extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  


  render() {
    let thumbs = this.props.photos;
    return (
      <aside className='productDesc__thumbs'>
        {thumbs.map((thumb, index)=>
        <img key={index}
          className='productDesc__thumbs--thumb-item' 
          src={thumb || '/logo192.png' }
          alt='product_name'
          onClick={() => this.props.selectPhoto(thumb)}/>
          
        )}
      </aside>
    )
  }
}

export default ThumbsBlock
