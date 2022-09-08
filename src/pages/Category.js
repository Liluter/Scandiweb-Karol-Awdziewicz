import React from 'react'
import ProductCards from '../components/ProductCards'
import '../styles/Category.scss'


class Category extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  // componentDidMount(){
  //   console.log('Category mount',this.props)
  // }
  // componentDidUpdate(){
  //   console.log('Category update',this.props)
  // }

  render() {
    return (
    <main className='category background'>
      <header className='category__title'><span>{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</span></header>
      <ProductCards key={this.props.category}
      category={this.props.category} 
      // currentCurency={this.props.currentCurency}
      />
    </main>
    )
  }
}

export default Category;
