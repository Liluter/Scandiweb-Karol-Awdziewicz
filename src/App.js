import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './styles/App.scss';
import Category from './pages/Category';
import Navigation from './components/Navigation';
import ProductDescription from './pages/ProductDescription';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={category: 'all',
                currentCurency: "$"}; // to remove redux will take care

    this.categorySelect = this.categorySelect.bind(this)
    // this.changeCurrency = this.changeCurrency.bind(this);
  }

  // changeCurrency(sign){
  //   this.setState({currentCurency: sign})
  // }

  categorySelect(cat){
    this.setState({category: cat})
  }

  render() {
    return (
      <main className='container'>
        <Navigation categorySelect={this.categorySelect}  ></Navigation>
        <Routes>
          <Route path="/" element={<Category category={'all'} />}/>
          <Route path="/all" element={<Category category={this.state.category} />}/>
          <Route path="/clothes" element={<Category category={this.state.category} />}/>
          <Route path="/tech" element={<Category category={this.state.category} />}/>
          <Route path="/:category/:productId" element={<ProductDescription/>}/>
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <h3>There's nothing here!</h3>
            </main> 
          }/>
        </Routes>
      </main>
    );
  }
}

export default App;