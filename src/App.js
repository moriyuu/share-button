import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TwitterButton, FacebookButton } from "./ShareButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" style={{ display: "flex", marginTop: "40px" }}>
          <div style={{ marginLeft: "auto" }}>
            <TwitterButton />
          </div>
          <div style={{ marginRight: "auto", marginLeft: "20px" }}>
            <FacebookButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
