import React, { PropTypes } from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div className="comment">
            <strong>{user}</strong>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment
