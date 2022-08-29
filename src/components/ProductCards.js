import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import '../styles/ProductCards.scss'

export class ProductCards extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className='productCards'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    )
  }
}

export default ProductCards