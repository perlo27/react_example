import React, { Component, PropTypes } from 'react'
import { FormGroup, Input, Button, Label } from 'reactstrap'

const propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

class NewCommentForm extends Component {

    state = {
        text: '',
        user: this.props.user
    }

    handleChange = ev => this.setState({
        text: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        const { addComment, articleId } = this.props
        addComment(this.state, articleId)

        this.setState({
            text: ''
        })
    }

    render() {
        const { user } = this.props
        return (
            <FormGroup onSubmit={this.handleSubmit}>
                <Label for="newcomment">{user}:</Label>
                <Input type="textarea" id="newcomment" value={this.state.text} onChange={this.handleChange}/>
                <Button outline color="success comments-publish-btn" onClick={this.handleSubmit}> Publish </Button>
            </FormGroup>
        )
    }
}

NewCommentForm.propTypes = propTypes

export default NewCommentForm