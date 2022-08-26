import React from 'react'
import '../styles/App.scss';
import Categories from './Categories';
import Basket from './Basket';
import New from './New'
import Newer from './Newer';
import Newgraph from './Newgraph';
import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <main >
        <Navigation></Navigation>
        <h1>Hello world</h1>
        <Categories/>
        <Basket></Basket>
        <New></New>
        <Newer> </Newer>
        <Newgraph></Newgraph>
      </main>
    );
  }
}

export default App;
