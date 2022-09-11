import React from 'react'
import {Routes, Route, Switch} from 'react-router-dom';
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
  }

  toggleFog(){
    this.setState(()=>({toggleFog: !this.state.toggleFog}))
  }
  closeFog(){
    this.setState(()=>({toggleFog: false}))
  }

  toggleMiniCart(){
    this.setState(()=>({miniCart: !this.state.miniCart}))
    this.toggleFog()
  }
  closeMiniCart(){
    this.setState(()=>({miniCart: false}))
    this.closeFog()
  }

  categorySelect(cat){
    this.setState(()=>({category: cat}))
  }

  render() {
    return (
      <main className='container'>
        <Routes>
          <Route path="/" element={ <Navigation 
          categorySelect={this.categorySelect} 
          toggleFog={this.toggleFog} 
          toggleMiniCart={this.toggleMiniCart} 
          miniCart={this.state.miniCart} ></Navigation> }
          >
            <Route index element={<Category key={"index"} category={'all'} />}/>
            <Route path="/all" element={<Category key={"all"} category={'all'} />}/>
            <Route path="/clothes" element={<Category key={'clothes'} category={'clothes'} />}/>
            <Route path="/tech" element={<Category key={'tech'} category={'tech'} />}/>
            <Route path="/:category/:productId" element={<ProductDescription  />}/> 
            <Route path="/cart" element={<Cart closeMiniCart={this.closeMiniCart}/>}/>  
            <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <h3>There's nothing here!</h3>
              </main> 
            }/>
          </Route>
        </Routes>
            { this.state.toggleFog 
            ? <div onClick={this.toggleMiniCart} className='container__fog'></div> 
            : null}
      </main>
    );
  }
}

export default App;