import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
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
  
  render() {
    let {  productId} = this.props.params;
    return (
        <div className='productDesc' >
          <Query  
          query={GET_PRODUCT} variables={{"productId": productId}} >
            {({loading, data, refetch, fetchMore})=>{
              if (loading) return "Loading...";
              const { product} = data;
              refetch()
              return (
              <ProductDescWrapper  productId={productId} product={product}/>
              )
            }}
        </Query>
        </div>
    )
  }
}

export default withParams(ProductDescription)