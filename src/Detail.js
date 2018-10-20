import React, { Component } from 'react';
import logo from './logo.svg';
import './Detail.css';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <header className="Detail-header">
          <h3>
            Where can I get free medical care downtown?
          </h3>
          <div className="Profile">
            <img src={logo} className="Detail-photo" alt="profile" />
            <p>Hi there, try these:</p>
            <li>Office on 1st & Stark</li>
            <li>Clinic Fridays 1-3pm</li>
          </div>
        </header>
      ]
      </div>
    );
  }
}

export default Detail;


/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
</a> */
