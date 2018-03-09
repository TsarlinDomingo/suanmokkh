import React, { Component } from 'react';
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
  DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Banner extends Component {
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
      <div className="container-fluid">
        <Navbar light expand="md">

          <NavbarBrand href="/">
            <div className="icon"><div className="triangle"></div></div>
            Suan Mokkh
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>TOPICS</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> Option 1 </DropdownItem>
                  <DropdownItem> Option 1 </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem> Reset </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>TRACK LENGTH</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> Option 1 </DropdownItem>
                  <DropdownItem> Option 1 </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem> Reset </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>

            <InputGroup>
              <Input placeholder="search by title..." />
            </InputGroup>

          </Collapse>

        </Navbar>
      </div>
    );
  }
}

export default Banner;
