import React from "react";
import {
  Grid,
  IconButton,
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
 * Meant to edit a profile's images
 */
export default class AddPictures extends React.Component {

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



  render() {
    const highlightStyle = {
      backgroundColor: "#56D822"
    };

    return (
      <div style={{ backgroundColor: "#FCFFFC" }}>
        <EditingNavBar title="Edit Photos" backNavigation="/profile" />
        <div style={{ margin: "0 auto", width: "75%" }}>
          <form>
            <Grid container direction="column">
              <this.CardGrid />
              <Fab
                variant="extended"
                style={{ color: "#FCFFFC", backgroundColor: "#56D822", marginTop:'50px' }}
                href='/profile'
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
