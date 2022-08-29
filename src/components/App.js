import React from 'react'
import {Routes, Route} from 'react-router-dom';
import '../styles/App.scss';
import Category from './Category';
import Navigation from './Navigation';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={category: 'all',
                currentCurency: "$"};

    this.categorySelect = this.categorySelect.bind(this)
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  changeCurrency(sign){
    this.setState({currentCurency: sign})
  }

  categorySelect(cat){
    this.setState({category: cat})
  }

  render() {
    return (
      <main className='container'>
        <Navigation categorySelect={this.categorySelect} changeCurrency={this.changeCurrency} currentCurency={this.state.currentCurency}></Navigation>
        <Routes>
          <Route path="/" element={<Category category={'all'} currentCurency={this.state.currentCurency} />}/>
          <Route path="/all" element={<Category category={this.state.category} currentCurency={this.state.currentCurency}/>}/>
          <Route path="/clothes" element={<Category category={this.state.category} currentCurency={this.state.currentCurency}/>}/>
          <Route path="/tech" element={<Category category={this.state.category} currentCurency={this.state.currentCurency}/>}/>
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


{/* <Routes>
        <Route path="/" element={<Counter isChecked={checked} handleChange={handleChange} />}/>
        <Route path="/room" element={<Room isChecked={checked} />}/>
        <Route path="/summary" element={<Summary />}/>
      </Routes> */}

{/* <Link style={{width:'100%'}} to="/room"><Button size="large" block>Pick a seat</Button></Link> */}