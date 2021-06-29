import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Forms';
// import Apifailed from './Apifailed';

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> City Explorer </h1>
        </header>
        <Forms/>
          
      </div>
    )
  }
}

export default App