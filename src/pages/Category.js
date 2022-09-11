import React from 'react'
import ProductCards from '../components/ProductCards'
import '../styles/Category.scss'
import {ReactComponent as Spinner} from '../assets/Spinner.svg'

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {  spinner: false,
                  counter: 1 }
    this.handleSpinner = this.handleSpinner.bind(this)
    this.showSpinner = this.showSpinner.bind(this)
    this.hideSpinner = this.hideSpinner.bind(this)
  }

  handleSpinner (){
    const { scrollHeight, clientHeight } = document.documentElement;
    setTimeout(()=>{
        this.hideSpinner()
        this.setState({counter: this.state.counter + 1});
      }, 1500);
    document.documentElement.scrollTop = scrollHeight - clientHeight - 6;
    this.showSpinner();
  } 

  showSpinner = () => {
    this.setState({spinner: true})
  }
  hideSpinner = () => {
    this.setState({spinner: false})
  }

  render() {
    return (
    <main key={this.props.category} title={this.props.category} className='category background'>
      <header className='category__title'><span>{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</span></header>
      <ProductCards 
      key={this.props.category}
      category={this.props.category}
      handleSpinner={this.handleSpinner}
      counter={this.state.counter}
      />
      <div className='spinnerWrapper'>
        <Spinner className={`spinnerWrapper--spinner ${ this.state.spinner ? '' : 'hide'  }`} /> 
      </div> 
    </main>
    )
  }
}

export default Category;
