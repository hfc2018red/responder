import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Response from './components/Response';
import FooterSection from './components/FooterSection';
import IncomingQuestions from './components/IncomingQuestions';
import openSocket from 'socket.io-client';
const socket = openSocket('https://hfc2018red.herokuapp.com');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      activeThread: undefined
    };
  }

  handleSelectThread(threadId) {
    this.setState(Object.assign({}, this.state, {
      activeThread: threadId
	}));
  }

  handleUpdate(e) {
    this.setState(Object.assign({}, this.state, {
      message: e.target.value
	}));
  }

  handleSubmit(e) {
    e.preventDefault();
    window.fetch('https://hfc2018red.herokuapp.com/message', {
      method: 'POST',
      body: JSON.stringify({
        body: this.state.message,
		threadId: this.state.activeThread,
		uuid: '1234'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json();
	}).then(json => {
      this.setState(Object.assign({}, this.state, {
        threadId: json
	  }));
	});
  }

  componentDidMount() {
    window.fetch('https://hfc2018red.herokuapp.com/threads')
      .then(res => {
        return res.json();
      }).then(json => {
        this.setState(Object.assign({}, this.state, {
          threads: json
        }));
      })

    socket.on('message', msg => {
      window.fetch('https://hfc2018red.herokuapp.com/threads')
        .then(res => {
          return res.json();
        }).then(json => {
          this.setState(Object.assign({}, this.state, {
            threads: json
          }));
        })
    });
  }
  
  render() {
    console.log(this.state.threads);
    return (
      <div>
        <Nav />
        <div style={styles.main}>
          <BrowserRouter>
            <Route render={()=><IncomingQuestions threads={this.state.threads} handleSelectThread={this.handleSelectThread.bind(this)} /> }/>
          </BrowserRouter>
          <Response activeThread={this.state.activeThread} handleUpdate={this.handleUpdate.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
        <FooterSection />
      </div>
    );
  }
}

const styles = {
  main: {
    display: 'flex'
    
  }
}

export default App;
