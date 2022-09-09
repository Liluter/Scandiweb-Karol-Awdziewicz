import React from 'react'
import ProductCards from '../components/ProductCards'
import '../styles/Category.scss'
import {ReactComponent as Spinner} from '../assets/Spinner.svg'

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {  spinner: false,
                    data: true  }
    this.handleSpinner = this.handleSpinner.bind(this)
  }

handleSpinner(){
  return new Promise ( (resolve, reject)=> {
    const { scrollHeight, clientHeight } = document.documentElement;
    this.setState(()=>({spinner: true}))
    document.documentElement.scrollTop = scrollHeight - clientHeight - 6;
    setTimeout(()=> { 
      this.setState(()=>({spinner: false})); 
      resolve( true );
    },1500 )
  })
}

  render() {
    
    return (
    <main className='category background'>
      <header className='category__title'><span>{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</span></header>
      <ProductCards key={this.props.category}
      category={this.props.category}
      handleSpinner={this.handleSpinner}
      // spinner={this.state.spinner}
      // currentCurency={this.props.currentCurency}
      />
      <div className='spinnerWrapper'>
        <Spinner className={`spinnerWrapper--spinner ${ this.state.spinner ? '' : 'hide'  }`} /> 
      </div> 
    </main>
    )
  }
}

export default Category;
