import React from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

import AccountCircle from "@material-ui/icons/AccountCircle";
import logo from "../images/logo.png";
import ForumRounded from "@material-ui/icons/ForumRounded";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#56D822"
    }
  }
});

/*
 * Main NavBar used to Navigate between Profile View, GangView, and Messages
 */
const NavBar = props => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <ToolBar>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Link to="/profile">
              <IconButton
                style={props.page === "profile" ? { color: "#FCFFFC" } : {}}
              >
                <AccountCircle />
              </IconButton>
            </Link>
            <Link to="/gangview">
              <IconButton
                style={
                  props.page === "gangview"
                    ? { backgroundColor: "#FCFFFC" }
                    : {}
                }
              >
                <img src={logo} alt="Home" width="24" height="24" />
              </IconButton>
            </Link>
            <Link to="/messages">
              <IconButton
                style={props.page === "messages" ? { color: "#FCFFFC" } : {}}
              >
                <ForumRounded />
              </IconButton>
            </Link>
          </Grid>
        </ToolBar>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
