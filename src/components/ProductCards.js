import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import '../styles/ProductCards.scss'

const GET_PRODUCTS = gql`
query GetProducts($input: CategoryInput) {
  category(input: $input) {
    name
    products {
      name
      inStock
      gallery
      category
      prices {
        amount
      amount
        currency {
          label
          symbol
        }
      }
      id
    }
  }
}
`

export class ProductCards extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  componentDidMount(){
    console.log('Product Cards mount',this.props);
  }

  render() {
    return (
      <div className='productCards'>
      <Query query={GET_PRODUCTS} variables={{"input": {"title": this.props.category}}} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { category} = data;
            return (<>{category.products.map((product,index)=> <ProductCard key={product.id} product={product} currentCurency={this.props.currentCurency} />)}</>)
          }}
      </Query>
      </div>
    )
  }
}

export default ProductCards;