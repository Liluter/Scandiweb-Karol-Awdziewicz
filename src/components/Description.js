import React, { Component } from 'react'

export class Description extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.createDescription = this.createDescription.bind(this)
  }
  
  createDescription(){
    return {__html: this.props.description}
  }
  
  render() {
    return (
      <div className='description' dangerouslySetInnerHTML={this.createDescription()}>
      </div>
    )
  }
}

export default Description
