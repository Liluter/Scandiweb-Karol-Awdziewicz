import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './styles/App.scss';
import Category from './pages/Category';
import Navigation from './components/Navigation';
import ProductDescription from './pages/ProductDescription';
import Cart from './pages/Cart';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={category: 'all',
                currentCurency: "$",
                toggleFog: false,
                miniCart: false}; // to remove redux will take care

    this.categorySelect = this.categorySelect.bind(this)
    this.toggleFog = this.toggleFog.bind(this)
    this.closeFog = this.closeFog.bind(this)
    this.toggleMiniCart = this.toggleMiniCart.bind(this)
    this.closeMiniCart = this.closeMiniCart.bind(this)
    // this.changeCurrency = this.changeCurrency.bind(this);
  }

  // changeCurrency(sign){
  //   this.setState({currentCurency: sign})
  // }
  toggleFog(){
    this.setState(()=>({toggleFog: !this.state.toggleFog}))
  }
  closeFog(){
    this.setState(()=>({toggleFog: false}))
  }

  toggleMiniCart(){
    this.setState(()=>({miniCart: !this.state.miniCart}))
    this.toggleFog()
    // console.log('Run toggle mini cart')
  }
  closeMiniCart(){
    this.setState(()=>({miniCart: false}))
    this.closeFog()
    // console.log('Run Close mini cart')
  }


  categorySelect(cat){
    this.setState({category: cat})
  }

  render() {
    // console.log(this.state)
    return (
      <main className='container'>
        <Navigation categorySelect={this.categorySelect} toggleFog={this.toggleFog} toggleMiniCart={this.toggleMiniCart} miniCart={this.state.miniCart} ></Navigation>
        <Routes>
          <Route path="/" element={<Category category={'all'} />}/>
          <Route path="/all" element={<Category category={this.state.category} />}/>
          <Route path="/clothes" element={<Category category={this.state.category} />}/>
          <Route path="/tech" element={<Category category={this.state.category} />}/>
          <Route path="/:category/:productId" element={<ProductDescription  />}/>
          <Route path="/cart" element={<Cart closeMiniCart={this.closeMiniCart}/>}/>
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <h3>There's nothing here!</h3>
            </main> 
          }/>
        </Routes>
          { this.state.toggleFog ? <div onClick={this.toggleMiniCart} className='container__fog'></div> : null}
      </main>
    );
  }
}

export default App;