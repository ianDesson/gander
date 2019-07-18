import React from "react";
import { Link } from "react-router-dom";
import logoWithText from "../images/logoWithText.png";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

/*
 * Provides the colour scheme used
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000F08"
    },
    secondary: {
      main: "#1C3738"
    }
  }
});

/*
 * CSS styling for the logo image
 */
const logoStyle = {
  width: "20rem",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px"
};

/*
 * Component for the sign in page (this is the first page to load)
 */
export default class SignIn extends React.Component {
  render() {
    return (
      <div style={{ width: '75%', margin: '0 auto'}}>
        <img src={logoWithText} style={logoStyle} alt="Gander"/>
        <ThemeProvider theme={theme}>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth="true"
              size="large"
            >
              SIGN UP WITH EMAIL
            </Button>
          </Link>
          <Button
            style={{marginTop: '1rem', backgroundColor: '#3C5A99'}}
            variant="contained"
            color="secondary"
            fullWidth="true"
            size="large"
          >
            SIGN UP WITH FACEBOOK
          </Button>

          <Button
            style={{marginTop: '1rem', backgroundColor: '#B23121'}}
            variant="contained"
            color="secondary"
            fullWidth="true"
            size="large"
          >
            SIGN UP WITH GOOGLE
          </Button>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <Button
              style={{marginTop: '1rem'}}
              variant="contained"
              color="primary"
              fullWidth="true"
              size="large"
            >
              LOG IN
            </Button>
          </Link>
        </ThemeProvider>
      </div>
    );
  }
}
