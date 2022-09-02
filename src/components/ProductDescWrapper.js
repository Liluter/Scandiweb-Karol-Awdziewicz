import React, { Component } from 'react'
import ThumbsBlock from './ThumbsBlock'
import PhotoBlock from './PhotoBlock'
import VariantBlock from './VariantBlock'


export class ProductDescWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {mainPhoto : ''}
    this.selectPhoto = this.selectPhoto.bind(this)
  }

selectPhoto(foto){
this.setState( {mainPhoto : foto});
}

componentDidMount(){
  this.setState( {mainPhoto : this.props.product.gallery[0]})
}

  render() {
    return (
      <>
        <ThumbsBlock photos={this.props.product.gallery}
        selectPhoto={this.selectPhoto}/>
              
        <PhotoBlock photo={ this.state.mainPhoto }/>
              
        <VariantBlock/>
      </>
    )
  }
}

export default ProductDescWrapper
//this.props.product.gallery[0]