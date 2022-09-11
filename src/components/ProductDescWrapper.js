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

selectPhoto = (photo) =>{
this.setState( {mainPhoto : photo});
}

componentDidMount(){
  this.setState( {mainPhoto : this.props.product.gallery[0]})
}

  render() {
    return (
      <>
        <ThumbsBlock  
        name={this.props.product.name} 
        photos={this.props.product.gallery} 
        selectPhoto={this.selectPhoto}/>
              
        <PhotoBlock 
        name={this.props.product.name} 
        photo={ this.state.mainPhoto }/>
              
        <VariantBlock product={this.props.product}/>
      </>
    )
  }
}

export default ProductDescWrapper