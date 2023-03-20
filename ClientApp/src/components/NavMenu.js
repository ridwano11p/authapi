import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LoginMenu } from "./api-authorization/LoginMenu";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 blue-navbar"
          container
          light
        >
          <div className="sidebar-and-navbar">
            <NavbarBrand tag={Link} to="/">
              authapi
            </NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!this.state.collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/productsorter">
                  Management
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/contacts">
                  Contacts
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Items
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/items">
                    Items
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/composite-items">
                    Composite Items
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/item-adjustments">
                    Item Adjustments
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/transfer-orders">
                    Transfer Orders
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/sales-orders">
                  Sales Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/packages">
                  Packages
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/invoices">
                    Invoices
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/purchase-orders">
                    Purchase Orders
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/bills">
                    Bills
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/integrations">
                    Integrations
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/reports">
                    Reports
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <LoginMenu></LoginMenu>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
