import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'

import '../styles/ProductDescription.scss'

import '../styles/ProductDescription.scss'
import { withParams } from '../utils/hocs'


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


  
  componentDidMount(){
    console.log('PDP mount props',this.props);
    // console.log('PDP mount state',this.state);
  }
  
  render() {

    let { category , productId} = this.props.params;
    
    return (
        <div className='productDesc'> 
  
        <Query query={GET_PRODUCT} variables={{"productId": productId}} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { product} = data;
            return (<>
            <aside className='productDesc__thumbs'>
              <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
              <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
              <img className='productDesc__thumbs--thumb-item' src='/logo192.png' alt='product_name'/>
            </aside>
            
            <main><img className='productDesc__main--photo' src='/logo512.png' alt='product_name'/></main>
            <aside className='productDesc__block'>
              <h1 className='productDesc__block--header'>{product.brand}</h1>
              <h2 className='productDesc__block--name'>{product.name}</h2>
              {/* new element */}
              <div className='productDesc__block--variantSize'>
                <div className='variantSize__label'>SIZE:</div>
                <div className='variantSize__options'>
                  <button className='variantSize__options--Btn'>XS</button>
                  <button className='variantSize__options--Btn'>S</button>
                  <button className='variantSize__options--Btn'>M</button>
                  <button className='variantSize__options--Btn'>L</button>
                </div>
              </div>
              
            </aside>

            </>)
          }}
      </Query>
      </div>
    )
  }
}

export default withParams(ProductDescription)