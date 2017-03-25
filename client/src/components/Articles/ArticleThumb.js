import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
    article: PropTypes.object.isRequired
}

function ArticleThumb({ article }) {
    let { date } = article
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    date = new Date(date).toLocaleString("en-US", options)
    return (
        <li>
            <article className="story">
                <figure className="photo">
                    <Link to={`/articles/${article.id}`}>
                        <img src={article.imageLink} alt="" />
                    </Link>
                    <figcaption className="caption">
                        <span>Photo description</span>
                    </figcaption>
                </figure>
                <div className="story-body">
                    <h2 className="headline">
                        <Link to={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </h2>
                    <div className="thumb">
                        <Link to={`/articles/${article.id}`}>
                            <img src={article.imageLink} alt="" />
                        </Link>
                    </div>
                    <p className="summary">{article.teaser}</p>
                    <p className="byline">{date}</p>
                </div>
            </article>
        </li>
    )
}

ArticleThumb.propTypes = propTypes

export default ArticleThumb
