import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input } from 'reactstrap'
import { loginUser, logoutUser } from '../AC/user'
import UserLogoutButton from './UserLogoutButton'

class ModalAuth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            userName: ''
        }

        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggle(e) {
        const { loginUser } = this.props
        this.setState({
            modal: !this.state.modal
        })
        if (e.target.hasAttribute('id') && this.state.userName) {
            loginUser(this.state.userName)
            this.setState({
                userName: ''
            })
        }
    }

    handleChange(e) {
        e.preventDefault()
        if (e.target.value.length < 16) {
            this.setState({
                userName: e.target.value
            })
        }
    }

    render() {
        const { userName } = this.props
        if (userName) return <UserLogoutButton userName={userName} logoutUser={this.props.logoutUser} />
        return (
            <div>
                <Button outline color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Log in to write comments</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <Input
                              placeholder="Enter your name"
                              value={this.state.userName}
                              onChange={this.handleChange}
                            />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button id="login" outline color="info" onClick={this.toggle}>LOG IN</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(state => ({
    userName: state.user.get('name')
}), { loginUser, logoutUser })(ModalAuth)
