import React from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'

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



class Categories extends React.Component {
  
  render() {
    return (<>
      <div>Categories Component</div>
      {/* <Query query={CATEGORIES}>
          {({loading, data})=>{
            if(loading) return "Loading...";
            const { categories } = data;
            return categories.map((cat,index) => <h1 key={index}>{cat.name}</h1>)
          }}
        </Query> */}
          </>
    )
  }
}

export default Categories