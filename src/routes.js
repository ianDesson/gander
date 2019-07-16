import React from "react";
import { Switch, Route } from "react-router-dom";

import GangView from './static-pages/GangView';
import Profile from "./static-pages/Profile";
import EditInfo from "./static-pages/EditInfo";
import SignIn from './static-pages/SignIn';
import Login from './static-pages/Login';
import SignUp from './static-pages/SignUp'

/*
 * Forces the page to scroll to the top when loaded
 */
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}


const Routes = () => (
  <Switch>
    <ScrollToTop>
      {
        // The exact keyword is used to denote the default/index/first page that opens
        // The path prop to denotes the url path
        // The component prop denotes the component to render at the path
      }
      <Route exact path="/" component={SignIn} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/GangView" component={GangView} />
      <Route path="/Profile" component={Profile} />
      <Route path="/EditInfo" component={EditInfo} />
    </ScrollToTop>
  </Switch>
);

export default Routes;