import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import {graphql } from '@apollo/client/react/hoc'
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
    this.state = {pageNumber: 1,
                  pageOneLimit: 4, // change first number of items on the page to show scroll
                  itemPerPage: 1,  // numbers item fetch form db in next scroll down
                  spinner: false,
                  indexLimit: 0}
    this.handlePageNumber = this.handlePageNumber.bind(this)
  }
  componentDidMount(){
    const windowXsize = window.screen.availWidth
    if (windowXsize < 983) {
      this.setState(()=> ({ pageOneLimit: 2, itemPerPage: 1}))
    } else if (windowXsize < 1381) {
      this.setState(()=> ({ pageOneLimit: 3, itemPerPage: 2}))
    } else if (windowXsize < 1440) {
      this.setState(()=> ({ pageOneLimit: 4, itemPerPage: 2}))
    }  else {
      this.setState(()=> ({ pageOneLimit: 4, itemPerPage: 2}))
    }
    
    this.handlePageNumber()
  }
  
  handlePageNumber(){
    window.addEventListener('scroll', ()=> {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const PageTarget = Math.ceil( 1 + ((this.props.data.category.products.length - this.state.pageOneLimit ) / this.state.itemPerPage) ) 
      if ( (scrollTop + clientHeight) === scrollHeight ) {        
        if (this.props.counter < PageTarget){
          this.props.handleSpinner(this.state.pageNumber)
          }
      } 
    } , {passive: false})
  }

  render() {
    const toShow = ( (this.state.itemPerPage * (this.props.counter - 1)) + (this.state.pageOneLimit ) )
    return (
      <div className='productCards'>
      <Query query={GET_PRODUCTS} variables={{"input": {"title": this.props.category}}} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { category} = data;
            return (<>
              {category.products.map((product,index)=> 
              ( index < toShow ? 
              <ProductCard key={product.id} product={product}/> 
              : null ))}
              </>)
          }}
      </Query>
      </div>
    )
  }
}

export default graphql(GET_PRODUCTS, {
  options: (props) => {
    return {
      variables: {
        input: {title: props.category}
    }
  }
}})(ProductCards);