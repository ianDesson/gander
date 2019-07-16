import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  createMuiTheme,
  TextField,
  Card,
  Fab
} from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { ThemeProvider } from "@material-ui/styles";

import ArrowBack from "@material-ui/icons/ArrowBack";
import Cancel from "@material-ui/icons/Cancel";
import AddCircle from "@material-ui/icons/AddCircle";
import Save from "@material-ui/icons/Save";

export default class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedButton: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  NavBar = () => {
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
            <Link to="/profile">
              <IconButton size="medium">
                <ArrowBack fontSize="large" />
              </IconButton>
            </Link>
            <Typography variant="h4" style={{ margin: "0 auto" }}>
              Edit Info
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  };

  CardGrid = () => (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: "2rem" }}
    >
      <Card>
        <CardMedia
          image={require("../images/person-icon.jpg")}
          title="Profile Picture"
          style={{
            height: "3rem",
            backgroundSize: "contain"
          }}
        />
        <CardActions>
          <IconButton style={{ color: "#ff1a1a" }} size="medium">
            <Cancel />
          </IconButton>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          title="Profile Picture"
          style={{
            height: "3rem",
            backgroundSize: "contain"
          }}
        />
        <CardActions>
          <IconButton style={{ color: "#56D822" }} size="medium">
            <AddCircle />
          </IconButton>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          title="Profile Picture"
          style={{
            height: "3rem",
            backgroundSize: "contain"
          }}
        />
        <CardActions>
          <IconButton style={{ color: "#56D822" }} size="medium">
            <AddCircle />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );

  handleChange(id) {
    this.setState({ clickedButton: id });
  }

  render() {
    const highlightStyle = {
      backgroundColor: "#56D822"
    };

    return (
      <div style={{ backgroundColor: "#FCFFFC" }}>
        <this.NavBar />
        <div style={{ margin: "0 auto", width: "75%" }}>
          <form>
            <Grid container direction="column">
              <this.CardGrid />
              <TextField
                multiline
                label="Bio"
                rowsMax="4"
                style={{ margin: "2rem 0 2rem" }}
              />
              <TextField label="City" />
              <Grid item style={{ margin: "2rem 0 2rem" }}>
                <Typography variant="h6">Gender</Typography>
                <Grid container direction="row" justify="space-evenly">
                  <IconButton
                    style={this.state.clickedButton === 0 ? highlightStyle : {}}
                    onClick={() => this.handleChange(0)}
                  >
                    <img
                      src={require("../images/male.png")}
                      alt="male"
                      style={{ height: "3rem" }}
                    />
                  </IconButton>
                  <IconButton
                    style={this.state.clickedButton === 2 ? highlightStyle : {}}
                    onClick={() => this.handleChange(2)}
                  >
                    <img
                      src={require("../images/female.png")}
                      alt="female"
                      style={{ height: "3rem" }}
                    />
                  </IconButton>
                  <IconButton
                    style={this.state.clickedButton === 3 ? highlightStyle : {}}
                    onClick={() => this.handleChange(3)}
                  >
                    <img
                      src={require("../images/other.png")}
                      alt="female"
                      style={{ height: "3rem" }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <Fab
                variant="extended"
                style={{ color: "#FCFFFC", backgroundColor: "#56D822" }}
              >
                <Save />
                Save
              </Fab>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}
