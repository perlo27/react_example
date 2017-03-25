import { connect } from 'react-redux'
// import 'loaders.css/src/animations/ball-grid-pulse.scss'
import { Loader } from 'react-loaders'
import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import { deleteArticle, loadArticle } from '../../AC/articles'
import RelatedArticles from './RelatedArticles'

const propTypes = {
    article: PropTypes.object
}

const defaultProps = {
    article: {}
}

class ArticlePage extends Component {

    componentDidMount() {
        this.checkAndLoad(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.checkAndLoad(nextProps)
    }

    checkAndLoad(props) {
        const { article, loadArticle, id } = props
        if (!article || (!article.loading && !article.text)) loadArticle(id)
    }

    render() {
        const { article } = this.props
        if (!article || article.loading) {
            return (
                <div className="main-article-container">
                    <Loader type="ball-grid-pulse" active />
                </div>
            )
        }

        return (
            <div className="main-article-container">
                <article>
                    <header className="story-header" >
                        <h3 className="kicker">Some theme</h3>
                        <h1 className="headline">{article.title}</h1>
                    </header>
                    <div className="article-body">
                        <div className="story-body">
                            <figure>
                                <div className="image">
                                    <img src={article.imageLink} alt="" />
                                </div>
                                <figcaption>
                                    <span className="caption">Some description of image</span>
                                    <span className="credit">Author of article and for whom</span>
                                </figcaption>
                            </figure>
                            <section className="story-content">
                                <p className="story-content-text">{article.text}</p>
                            </section>
                            <CommentList article={article} />
                        </div>
                        <RelatedArticles relatedStories={article.relatedStories} />
                    </div>
                </article>
            </div>
        )
    }
}

ArticlePage.propTypes = propTypes
ArticlePage.defaultProps = defaultProps

export default connect((state, { id }) => ({ article: state.articles.getIn(['entities', id]) }),
    { deleteArticle, loadArticle })(ArticlePage)
