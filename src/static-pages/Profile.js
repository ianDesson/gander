import React from "react";

import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import { IconButton, Link } from "@material-ui/core";

import Settings from "@material-ui/icons/Settings";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import Edit from "@material-ui/icons/Edit";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-end"
          >
            <IconButton>
              <Settings />
            </IconButton>
            <IconButton>
              <PhotoLibrary />
            </IconButton>
            <Link to="/editinfo">
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
          </Grid>
        </div>
      </>
    );
  }
}
