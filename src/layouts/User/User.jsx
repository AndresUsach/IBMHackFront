import React, {Component} from 'react'
import Sidebar from "components/Sidebar/Sidebar.jsx"
import { Route, Switch, Redirect } from "react-router-dom"
import Header from "components/Header/Header"
import userRoutes from "routes/routes.jsx"

class Coordinador extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  render(){
    return(
      <div className="wrapper">
        <Sidebar {...this.props} />
          <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
            <Switch>
            {userRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          </div>
      </div>
    );
  }
}

export default Coordinador;
