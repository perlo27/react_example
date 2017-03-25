import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import ModalAuth from './ModalAuth'
import history from '../history'

class Navigationbar extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleBrandClick = (ev) => {
        ev.preventDefault()
        history.push('/')
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand onClick={this.handleBrandClick} >
                        <img src="https://reactstrap.github.io/assets/logo.png" alt="" width="40px" height="40px"/>
                        News source
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/perlo27/js_ru_23_09_19_30">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <ModalAuth buttonLabel="LOG IN" />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigationbar
