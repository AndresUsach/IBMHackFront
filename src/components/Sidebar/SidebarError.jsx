import React, { Component } from "react";

import imagine from "assets/img/sidebar-3.jpg";
import logo from "assets/img/reactlogo.png";

class SidebarError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a
            href="/"
            className="simple-text logo-mini"
          style = {{marginRight:2 + 'px'}}>
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="/"
            className="simple-text logo-normal"
          >
            Tingeso Grupo 6
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarError;
