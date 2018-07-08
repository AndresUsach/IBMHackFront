import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";
import firebase from 'firebase';
import PropTypes from "prop-types";
class HeaderLinks extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props,context){
    super(props,context);
    this.state = {}
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    firebase.auth().signOut().then(function(){
      this.context.router.history.push("/")
    }).catch(function(error){
      console.log(error)
    })
  }
  
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1}>
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} onClick = {this.handleLogout}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
