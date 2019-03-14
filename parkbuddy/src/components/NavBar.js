import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import './navbar.css'

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(){
    localStorage.clear()
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="logo" href="/">
          <img src="https://fontmeme.com/permalink/190312/b91129db03b23fd7a6b388116e3cf8bb.png" alt="disney-font" border="0"/>              
        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='nav-item'>
                <NavLink href="/Posts/">Posts</NavLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavLink href="/request">Request Form</NavLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavLink href="/" onClick={this.logout}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
     
