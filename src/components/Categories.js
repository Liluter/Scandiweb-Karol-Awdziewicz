import React from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import '../styles/Categories.scss'

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
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
    <main className='category-container'>
      <header className='category-title'><span>Category name</span></header>
      <Query query={CATEGORIES} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { categories } = data;
            return (<ul>{categories.map((cat, index) => <li key={index} >{cat.name}</li>)}</ul>)
          }}
      </Query>
      <h2> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </h2>
    </main>
    )
  }
}

export default Categories;

// client
//   .query({query: CATEGORIES})
//   .then(res => console.log(res))
// console.log(client)