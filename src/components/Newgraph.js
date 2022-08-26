import React, { Component } from 'react'
import { gql} from '@apollo/client'
import {graphql } from '@apollo/client/react/hoc'


const CATEGORIES = gql`
query TakeProducts {
  categories {
    name
    products {
      name
    }
  }
}
`;

export class Newgraph extends Component {
displayCategories(){
  
  const data = this.props.data
  console.log('dada',data)
  if (data.loading) {
    return (<div>Loading Categories....</div>)
  } else {
    return data.categories.map((cat, index)=>(<li key={index}>{index}{'   '}{cat.name}</li>))
  }
}


  render() {
    return (
      <div>
        <ul>
          {this.displayCategories()}
        </ul>
      </div>
    )
  }
}

export default graphql(CATEGORIES)(Newgraph)
