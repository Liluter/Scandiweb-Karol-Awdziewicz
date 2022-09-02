import React, { Component } from 'react'

import '../styles/PhotoBlock.scss'

export class PhotoBlock extends Component {

  render() {
    
    return (
      <main>
        <img 
        className='productDesc__main--photo' 
        src={ this.props.photo }
        alt='product_name'/>
      </main>

    )
  }
}

export default PhotoBlock
