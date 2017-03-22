import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    state = {
        hurra: 'NOPE'
    }

    componentDidMount() {
        fetch('/api/article')
            .then((artarray) => {
                const art1 = JSON.parse(artarray[0])
                return art1
        })
            .then((art1obj) => {
               this.setState({
                   hurra: art1obj
               })
            }).
            catch((err) => {
            alert(err)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    <h1>{this.state.hurra}</h1>
                </div>
                <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App

