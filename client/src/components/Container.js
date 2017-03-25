import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Navbar from './Navbar'
import '../styles/App.css'

class Container extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Navbar />
                    <div className="content">
                        {this.props.children}
                    </div>
                    <footer>
                        <span className="author">Artem Pelenev</span>
                    </footer>
                </div>
            </Provider>
        )
    }
}

export default Container
