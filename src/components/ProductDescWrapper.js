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
    // console.log('ProdDescWrapp: ', this.props )
    return (
      <>
        <ThumbsBlock photos={this.props.product.gallery}
        selectPhoto={this.selectPhoto}/>
              
        <PhotoBlock photo={ this.state.mainPhoto }/>
              
        <VariantBlock 
        // key={this.productId } 
        product={this.props.product}/>
      </>
    )
  }
}

export default ProductDescWrapper
//this.props.product.gallery[0]