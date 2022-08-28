import React from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import ProductCards from './ProductCards'
import '../styles/Category.scss'

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

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    console.log('Category mount',this.props)
  }

  render() {
    return (
    <main className='category'>
      <header className='category__title'><span>{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</span></header>
      <Query query={CATEGORIES} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { categories } = data;
            return (<ul>{categories.map((cat, index) => <li key={index} >{cat.name}</li>)}</ul>)
          }}
      </Query>
      <h2> Bla Bla Bla Bla Bla Bla Bla Bla  </h2>
      <ProductCards category={this.props.category}/>
    </main>
    )
  }
}

export default Category;

// client
//   .query({query: CATEGORIES})
//   .then(res => console.log(res))
// console.log(client)