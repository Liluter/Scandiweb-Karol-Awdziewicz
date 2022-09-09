import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import {graphql } from '@apollo/client/react/hoc'
import '../styles/ProductCards.scss'
import {ReactComponent as Spinner} from '../assets/Spinner.svg'

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
                  itemPerPage: 2,  // numbers item fetch form db in next scroll down
                  spinner: false}
    // this.scroll = this.scroll.bind(this)
    this.handlePageNumber = this.handlePageNumber.bind(this)
    // this.handlePagination = this.handlePagination.bind(this)
  }
  componentDidMount(){
    const windowXsize = window.screen.availWidth
    if (windowXsize < 983) {
      this.setState(()=> ({ pageOneLimit: 2, itemPerPage: 1}))
    } else if (windowXsize < 1381) {
      this.setState(()=> ({ pageOneLimit: 3, itemPerPage: 2}))
    } else if (windowXsize < 1440) {
      this.setState(()=> ({ pageOneLimit: 4, itemPerPage: 3}))
    }  else {
      this.setState(()=> ({ pageOneLimit: 4, itemPerPage: 3}))
    }
    this.handlePageNumber()
  }
  
  handlePageNumber(){
    window.addEventListener('scroll', ()=> {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const PagesLimit = Math.ceil( (this.props.data.category.products.length - this.state.pageOneLimit) / this.state.itemPerPage) 
    // console.log('PAGE LIMIT', PagesLimit)
    // console.log('Aktual number in page:', ( (this.state.itemPerPage  * (this.state.pageNumber - 1)) + this.state.pageOneLimit  ))
      if ( (scrollTop + clientHeight) === scrollHeight ) {        
            if (this.state.pageNumber <= (PagesLimit) ){
              this.props.handleSpinner()
                .then((res) =>  {
                  this.setState(()=>({...this.state , pageNumber: this.state.pageNumber + 1})) 
                  })
            }
      } 
    } , {passive: true})
  }
  
  // handlePagination(){
  //   const {pageNumber, pageOneLimit, itemPerPage }= this.state
  //   return (pageOneLimit + pageNumber*itemPerPage)
  // }


  render() {
    // console.log('Product Cards Props',this.props)
    console.log('Product Cards State',this.state, window.screen.availWidth)
    // console.log('HANDLE PAGINATION RESOLVE', this.handlePagination())
    return (
      <div className='productCards'>
      <Query query={GET_PRODUCTS} variables={{"input": {"title": this.props.category}}} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { category} = data;
            // const PageLimit = Math.ceil(data.category.products.length / this.state.itemLimit)
            // console.log('PageLimit', PageLimit)



            return (<> {category.products.map((product,index)=> ( index < ((this.state.itemPerPage  * (this.state.pageNumber - 1)) + this.state.pageOneLimit  ) ? <ProductCard key={product.id} product={product}/> : null )  )}  </>)


            // return (<>{category.products.map((product,index)=> <ProductCard key={product.id} product={product}  />)}</>)
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


// componentDidMount(){
//   // console.log('Scroll: ',this.scroll())
//   window.addEventListener('scroll', ()=> {
//     const {
//         scrollTop,
//         scrollHeight,
//         clientHeight
//     } = document.documentElement;
//     if (scrollTop + clientHeight >= scrollHeight - 5 ) {
//       console.log('Scroll on bottom !!!', {scroll: scrollTop, scrollHeight: scrollHeight, clienHeight: clientHeight} )
//     }
//   } , {passive: true})
// }
// componentDidUpdate(){
//   // console.log('Scroll: ',this.scroll())
  
// }
// scroll(){
//   const {
//       scrollTop,
//       scrollHeight,
//       clientHeight
//   } = document.documentElement;
//   return {scroll: scrollTop, scrollHeight: scrollHeight, clienHeight: clientHeight}
// }