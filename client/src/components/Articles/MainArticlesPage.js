import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import ArticleThumb from './ArticleThumb'
import Loader from '../Loader'
import { loadAllArticles } from '../../AC/articles'

const propTypes = {
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    loaded: PropTypes.bool
}

const defaultProps = {
    articles: []
}

class MainArticlesPage extends Component {

    componentDidMount() {
        const { loaded, loading, loadAllArticles } = this.props
        if (!loaded || !loading) loadAllArticles()
    }

    render() {
        const { articles, loading } = this.props
        if (loading || !articles.length) return <Loader type="ball-grid-pulse" active />

        return (
            <div className="main">
                <ol className="story-menu">
                    <ArticleThumb article={articles[0]} />
                    <ArticleThumb article={articles[1]} />
                    <li className="story-group">
                        <ol className="story-menu">
                            <ArticleThumb article={articles[2]} />
                            <ArticleThumb article={articles[3]} />
                        </ol>
                    </li>
                </ol>
            </div>
        )
    }
}

MainArticlesPage.propTypes = propTypes
MainArticlesPage.defaultProps = defaultProps

export default connect((state) => {
    const { articles, filters } = state
    const selected = filters.get('selected')
    const { from, to } = filters.get('dateRange')

    const articleArray = articles.get('entities').valueSeq().toArray()
    const filteredArticles = articleArray.filter((article) => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
    }).reverse()
    return {
        articles: filteredArticles,
        loaded: articles.get('loaded'),
        loading: articles.get('loading')
    }
},
    { loadAllArticles }
)(MainArticlesPage)
