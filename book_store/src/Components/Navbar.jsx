import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 } from 'reactstrap';

export default class Example extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">Book Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-4">
                <NavLink href="/">Shop</NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink href="/cart">Cart</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="ml-4">
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    SĐT: 0983 483 698
                  </DropdownItem>
                  <DropdownItem>
                    Gmail: kitinkhanh@gmail.com
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    HQ Khánh
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}