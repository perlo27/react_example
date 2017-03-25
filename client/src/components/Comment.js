import React, { PropTypes } from 'react'

const propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div className="comment">
            <strong>{user}</strong>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = propTypes

export default Comment
