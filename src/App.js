import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FORM_CREATION from './form_creation.js';
import UTILISATEUR from './utilisateur.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <FORM_CREATION/>
      <UTILISATEUR/>
      </div>
    );
  }
}

export default App;
