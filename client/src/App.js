import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        hey: 'not yet'
    }

    componentDidMount() {
        fetch('api/articles').then((artarray) => {
            return artarray[0]
        }).then((art1) => {
            const artobj = JSON.parse(art1)
            this.setState({
                hey: artobj.title
            })
        }).catch((err) => {
            alert(err)
        })
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>
              {this.state.hey}
          </p>
      </div>
    );
  }
}

export default App;
