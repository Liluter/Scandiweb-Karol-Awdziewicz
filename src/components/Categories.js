import React from 'react'
import {gql} from '@apollo/client'
import {ApolloConsumer} from '@apollo/client'
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
    return (
    <>
      <div>Categories Component</div>
      <ApolloConsumer>
      {client => (
      <button
        onClick={() => client.query({query: CATEGORIES}).then(res => console.log(res))}
      >
        CLICK
      </button>
      )}
      </ApolloConsumer>
      <div>---------------</div>
      <Query query={CATEGORIES} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { categories } = data;
    
            return (<ul>{categories.map((cat, index) => <li key={index}>{cat.name}</li>)}</ul>)
          }}
      </Query>
    </>
    )
  }
}

export default Categories;

// client
//   .query({query: CATEGORIES})
//   .then(res => console.log(res))
// console.log(client)