import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C3738"
    },
    secondary: {
      main: "#000F08"
    }
  }
});
const paper = {
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const form = {
  marginTop: theme.spacing(1)
};

export default class Login extends React.Component {

  
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <ThemeProvider theme={theme}>
            <form style={form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: theme.spacing(3, 0, 2),
                  color: "#FCFFFC",
                  backgroundColor: "#56D822"
                }}
                href="/gangview"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </ThemeProvider>
        </div>
        <Box mt={5} />
      </Container>
    );
  }
}
