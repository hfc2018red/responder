import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Response from './components/Response';
import FooterSection from './components/FooterSection';
import IncomingQuestions from './components/IncomingQuestions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads = []
    };
  }
  
  componentDidMount() {
    window.fetch('http://hfc2018red.herokuapp.com/threads').then(res => {
      this.setState(Object.assign({}, this.state, {
        threads: res.json()
      }));
    });
  }
  
  render() {
    return (
      <div>
        <Nav messages={messages} />
        <IncomingQuestions threads={this.state.threads} />
        <Response />
        <FooterSection />
      </div>
    );
  }
}

export default App;
