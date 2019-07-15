import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";


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
        // The exact keyword is used to denote the default/index/welcome page
        // The path prop to denotes the url path
        // The component prop denotes the component to render at the path
      }
      <Route exact path="/" component={App} />
    </ScrollToTop>
  </Switch>
);

export default Routes;