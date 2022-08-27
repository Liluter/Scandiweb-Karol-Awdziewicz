import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {ApolloConsumer} from '@apollo/client'

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

export class Apolloconsum extends Component {
  render() {
    return (
      <ApolloConsumer>
      {client => (
      <button
        onClick={() => client.query({query: CATEGORIES}).then(res => console.log('apollo consumer',res))}
      >
        CLICK
      </button>
      )}
      </ApolloConsumer>
    )
  }
}

export default Apolloconsum