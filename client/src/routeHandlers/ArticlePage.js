import React, { Component, PropTypes } from 'react'
import Article from '../components/Articles/ArticlePage'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Article id = {this.props.params.id} />
            </div>
        )
    }
}

export default ArticlePage