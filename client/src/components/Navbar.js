import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import ModalAuth from './ModalAuth'

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
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">
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
