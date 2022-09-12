import React, { Component } from 'react'


export class PhotoBlock extends Component {

  render() {
    return (
      <main>
        <img 
        className='productDesc__main--photo' 
        src={ this.props.photo }
        title={this.props.name}
        alt={this.props.name}/>
      </main>

    )
  }
}

export default PhotoBlock
