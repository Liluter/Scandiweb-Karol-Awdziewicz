import React from 'react'
import '../styles/App.scss';
import Categories from './Categories';
import Basket from './Basket';
import New from './New'
import Newer from './Newer';
import Newgraph from './Newgraph';


class App extends React.Component {
  render() {
    return (
      <div >
        <h1>Hello world</h1>
        <Categories/>
        <Basket></Basket>
        <New></New>
        <Newer> </Newer>
        <Newgraph></Newgraph>
      </div>
    );
  }
}

export default App;
