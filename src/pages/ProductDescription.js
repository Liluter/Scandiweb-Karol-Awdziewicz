import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'

import '../styles/ProductDescription.scss'

import '../styles/ProductDescription.scss'
import { withParams } from '../utils/hocs'

import ProductDescWrapper from '../components/ProductDescWrapper'


const GET_PRODUCT = gql`
query GetProduct($productId: String!) {
  product(id: $productId) {
    id
    name
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
    description
    gallery
    inStock
    category
  }
}

`



export class ProductDescription extends Component {
  

  // componentDidMount(){
  //   console.log('PDP mount props',this.props);
  //   // console.log('PDP mount state',this.state);
  // }


  render() {

    let { category , productId} = this.props.params;
    
    return (
        <div className='productDesc'>
          <Query  
          query={GET_PRODUCT} variables={{"productId": productId}} >
            {({loading, data})=>{
              if (loading) return "Loading...";
              const { product} = data;
              return (
              <ProductDescWrapper product={product}/>
              )
            }}
        </Query>
        </div>
    )
  }
}

export default withParams(ProductDescription)