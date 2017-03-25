import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Record } from 'immutable'
import { loadAllArticles } from '../../AC/articles'

class RelatedArticle extends Component {

    componentDidMount() {
        const { loadAllArticles } = this.props
        loadAllArticles()
    }

    render () {
        const { relatedStories } = this.props
        if (!relatedStories[0]) return null
        const body = relatedStories.map(article =>
            <Link to={`/articles/${article.id}`} key={article.id}>
                <img src={article.imageLink} alt="" className="related-stories-thumb" />
                <h3>{article.title}</h3>
            </Link>
        )
        return (
            <div className="related-stories">
                <h2 className="related-stories-header">Related Coverage</h2>
                {body}
            </div>
        )
    }
}

RelatedArticle.propTypes = {
    relatedStories: PropTypes.arrayOf(PropTypes.instanceOf(Record)).isRequired
}

RelatedArticle.defaultProps = {
    relatedStories: [new Record({})]
}

export default connect((state, props) => ({
    relatedStories: props.relatedStories ? props.relatedStories.map(articleId => state.articles.getIn(['entities', articleId])) : []
}), { loadAllArticles })(RelatedArticle)
