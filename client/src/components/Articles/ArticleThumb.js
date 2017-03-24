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
                        <a href="#">{article.title}</a>
                    </h2>
                    <div className="thumb">
                        <a href="#"><img src={article.imageLink} alt="" /></a>
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
