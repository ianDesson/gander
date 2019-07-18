import React from "react";
import {
  Grid,
  IconButton,
  Typography,
  TextField,
  Card,
  Fab
} from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import Cancel from "@material-ui/icons/Cancel";
import AddCircle from "@material-ui/icons/AddCircle";
import Save from "@material-ui/icons/Save";

import EditingNavBar from "../components/EditingNavBar";

/*
 * Component for the Edit Info Page
 * Meant to edit a profile's bio, images, etc.
 */
export default class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedButton: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   * Component for adding/removing images on a profile
   */
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

  /*
   * Handles the change between genders
   */
  handleChange(id) {
    this.setState({ clickedButton: id });
  }

  render() {
    const highlightStyle = {
      backgroundColor: "#56D822"
    };

    return (
      <div style={{ backgroundColor: "#FCFFFC" }}>
        <EditingNavBar title="Edit Info" backNavigation="/profile" />
        <div style={{ margin: "0 auto", width: "75%" }}>
          <form>
            <Grid container direction="column">
              <this.CardGrid />
              <TextField
                multiline
                variant="outlined"
                label="Bio"
                rowsMax="4"
                style={{ margin: "2rem 0 2rem" }}
              />
              <TextField label="City" variant="outlined" />
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
