import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
    article: PropTypes.object.isRequired
}

function ArticleThumb({ article }) {
    return (
        <li>
            <article className="story">
                <figure className="photo">
                    <Link to={`/articles/${article.id}`}>
                        <img src={article.imageLink} alt="" />
                    </Link>
                    <figcaption className="caption">
                        <span>asdsadasdadasdas</span>
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
                    <p className="byline">{article.date}</p>
                </div>
            </article>
        </li>
    )
}

ArticleThumb.propTypes = propTypes

export default ArticleThumb
