import React from "react";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  createMuiTheme
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';

import ArrowBack from '@material-ui/icons/ArrowBack';

/*
 * NavBar used in EditInfo Page and CreateGroup page
 * Requires backNavigation and title prop to display the 
 * current page and what URL to go back to when the back button is pressed
 */

const EditingNavBar = (props) => {
  const NavBarTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#56D822"
      }
    }
  });
  return (
    <ThemeProvider theme={NavBarTheme}>
      <AppBar position="static">
        <Toolbar style={{ paddingLeft: "0" }}>
          <Link to={props.backNavigation}>
            <IconButton size="medium">
              <ArrowBack fontSize="large" />
            </IconButton>
          </Link>
          <Typography variant="h4" style={{ margin: "0 auto" }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default EditingNavBar;
