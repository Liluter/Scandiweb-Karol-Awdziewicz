import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'

export class ProductCards extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  render() {
    return (
      <>
      <div>ProductCards od cat : {this.props.category}</div>
      <ProductCard/>
      </>
    )
  }
}

export default ProductCards