import React, { Component } from 'react';
import {render} from 'react-dom';
import Test from './Components/Test';

class App extends Component {
  render() {
    return (
      <Test />
    )
  }
}

render(<App />, document.getElementById('root1'));