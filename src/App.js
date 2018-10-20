import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Response from './components/Response';
import FooterSection from './components/FooterSection';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Response />
        <FooterSection />
      </div>
    );
  }
}

export default App;
