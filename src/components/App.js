import React from 'react'
import '../styles/App.scss';
import Categories from './Categories';
import Navigation from './Navigation';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};

    this.categorySelect = this.categorySelect.bind(this)
  }

  categorySelect(e){
    console.log(e.target)
  }

  render() {
    return (
      <main className='container'>
        <Navigation></Navigation>
        <Categories categorySelect={this.categorySelect}/>
      </main>
    );
  }
}

export default App;
