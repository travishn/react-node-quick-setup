import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    fetch('/test').then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    }).then(json => {
      this.setState({response: json.express});
    }).catch(console.error);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
