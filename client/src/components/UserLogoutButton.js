import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'

export default class UserLogoutButton extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="nav-user" caret>
                    {this.props.userName}
                </DropdownToggle>
                <DropdownMenu right >
                    <DropdownItem header>{this.props.userName.toUpperCase()}</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem color="info" onClick={this.props.logoutUser}>
                        LOG OUT
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}
