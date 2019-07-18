import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import { IconButton, Typography } from "@material-ui/core";

import Settings from "@material-ui/icons/Settings";
import Edit from "@material-ui/icons/Edit";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";

/*
 * Component for the Profile page
 */
export default class Profile extends React.Component {
  render() {
    return (
      <>
        <NavBar page="profile" />
        <div>
          <Grid container direction="column" alignItems="center">
            <img
              src={require("../images/person-icon.jpg")}
              alt="Profile"
              style={{
                margin: "2rem",
                height: "150px",
                width: "150px",
                borderRadius: "75px"
              }}
            />
            <Typography variant="h3">Xavier, 40</Typography>
            <Typography variant="body1"> Ottawa, Ontario</Typography>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-end"
              style={{ marginTop: "3rem" }}
            >

              <Link to="/settings">
                <IconButton
                  style={{ color: "#2d3a3a", backgroundColor: "#d9d9d9" }}
                >
                  <Settings />
                </IconButton>
              </Link>
              
              <Link to="/AddPictures">
              <IconButton style={{color: '#2d3a3a', backgroundColor: '#d9d9d9'}}>
              <PhotoLibrary/>
              </IconButton>
              </Link>
              <Link to="/EditInfo">
                <IconButton
                  style={{ color: "#2d3a3a", backgroundColor: "#d9d9d9" }}
                >
                  <Edit />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
