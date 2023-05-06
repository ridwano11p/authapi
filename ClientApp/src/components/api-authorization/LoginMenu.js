import React, { Component, Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import authService from "./AuthorizeService";
import { ApplicationPaths } from "./ApiAuthorizationConstants";

export class LoginMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null,
    };
  }

  componentDidMount() {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateState() {
    const [isAuthenticated, user] = await Promise.all([
      authService.isAuthenticated(),
      authService.getUser(),
    ]);
    this.setState({
      isAuthenticated,
      userName: user && user.name,
    });
  }

  render() {
    const { isAuthenticated, userName } = this.state;
    if (!isAuthenticated) {
      const registerPath = `${ApplicationPaths.Register}`;
      const loginPath = `${ApplicationPaths.Login}`;
      return this.anonymousView(registerPath, loginPath);
    } else {
      const profilePath = `${ApplicationPaths.Profile}`;
      const logoutPath = `${ApplicationPaths.LogOut}`;
      const logoutState = { local: true };
      return this.authenticatedView(
        userName,
        profilePath,
        logoutPath,
        logoutState
      );
    }
  }
  authenticatedView(userName, profilePath, logoutPath, logoutState) {
    return (
      <Fragment>
        <div className="float-right flex items-center space-x-2 mr-7">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-12 h-12 border-2 border-blue-500 rounded-full"
          />
          <div>{userName}</div>
        </div>
        <div className="float-right">
          <Link
            to={logoutPath}
            className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            state={logoutState}
          >
            Logout
          </Link>
        </div>
      </Fragment>
    );
  }
  anonymousView(registerPath, loginPath) {
    return (
      <Fragment>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={registerPath}>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={loginPath}>
            Login
          </NavLink>
        </NavItem>
      </Fragment>
    );
  }
}
