import React from "react";
import logoWithText from "../images/logoWithText.png";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme ({
    palette: {
      primary: {
        main: "#000F08"
      },
      secondary: {
        main: '#1C3738'
      }
    }
});

const logoStyle = {
  width:'75%',
  height:'auto',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px'
};

const buttons = {
  marginTop: '10px'
}
export default class SignIn extends React.Component {

  render() {
    return(
      <>
        <img src={logoWithText} style= {logoStyle}/>
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" fullWidth='true' size='large'>
          SIGN UP WITH EMAIL
        </Button>

        <Button style={buttons} variant="contained" color="secondary" fullWidth='true' size='large'>
          SIGN UP WITH FACEBOOK
        </Button>

        <Button style={buttons} variant="contained" color="secondary" fullWidth='true' size='large'>
          SIGN UP WITH GOOGLE
        </Button>

        <Button style={buttons} variant="contained" color="primary" fullWidth='true' size='large'>
          LOG IN
        </Button>
        </ThemeProvider>
      </>
    );
  }
}
