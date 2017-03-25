
import React, { Component, PropTypes } from 'react'
import { Loader } from 'react-loaders'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import toggleOpen from './../decorators/toggleOpen'
import { getRelation } from '../store/helpers'
import { addComment, loadCommentsForArticle } from '../AC/comments'


const propTypes = {
    comments: PropTypes.array,
    // form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

class CommentList extends Component {

    componentWillReceiveProps({
        article: {
            id,
            commentsLoading,
            commentsLoaded
        },
        isOpen,
        loadCommentsForArticle
    }) {
        if (isOpen && !this.props.isOpen && !commentsLoaded && !commentsLoading) {
            loadCommentsForArticle(id)
        }
    }

    render() {
        const { article, comments, addComment, isOpen, toggleOpen, user } = this.props
        if (!comments || !comments.length || !article) {
            return (
                <div>
                    <NewCommentForm articleId={article.id} addComment={addComment} />
                </div>)
        }

        const commentItems = article.commentsLoaded && comments.map(comment =>
                <Comment comment={comment} key={comment.id} />
            )
        const btn = (
            <Button color="secondary comments-show-button" onClick={toggleOpen}>
                {isOpen ? 'hide comments' : `show ${comments.length} comments` }
            </Button>
        )
        const content = article.commentsLoading || !article.commentsLoaded ?
            <Loader type="ball-grid-pulse" active /> : <div>{commentItems}</div>
        const newCommentsForm = <NewCommentForm articleId={article.id} addComment={addComment} user={user} />
        const body = isOpen && (
        <div>
            {content}
            { user ? newCommentsForm : null }
        </div>
            )

        return (
            <div className="comments-body">
                {btn}
                {body}
            </div>
        )
    }
}

CommentList.propTypes = propTypes

export default connect((state, props) => ({
    comments: getRelation(props.article, 'comments', state),
    user: state.user.get('name')
}), { addComment, loadCommentsForArticle })(toggleOpen(CommentList))
