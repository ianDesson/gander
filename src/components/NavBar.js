import React from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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

const NavBar = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="static">
      <ToolBar>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <IconButton>
            <AccountCircle />
          </IconButton>
          <IconButton>
            <img src={logo} alt="Home" width="24" height="24" />
          </IconButton>
          <IconButton>
            <ForumRounded />
          </IconButton>
        </Grid>
      </ToolBar>
    </AppBar>
  </ThemeProvider>
);
export default NavBar;
