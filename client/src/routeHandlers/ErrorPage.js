import React, { Component } from 'react'

class ErrorPage extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.location.query.message}</h1>
            </div>
        )
    }
}

export default ErrorPage