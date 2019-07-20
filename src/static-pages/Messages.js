import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Add from "@material-ui/icons/Add";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

/*
 * Component for the messages page
 */
export default class Messages extends React.Component {
  render() {
    return (
      <>
        <NavBar page="messages" />
        <Grid
          container
          direction="row"
          justify="flex-start"
          style={{ margin: "0.5rem auto", width: "95%" }}
        >
          <Link to="/creategroup">
            <IconButton>
              <Avatar style={{ backgroundColor: "#80ff80" }}>
                <Add />
              </Avatar>
            </IconButton>
          </Link>
          <hr style={{ margin: "0 1rem 0 1rem" }} />
          <IconButton size="medium">
            <Avatar style={{ backgroundColor: "#ff1a1a" }}>GA</Avatar>
          </IconButton>
          <IconButton size="medium">
            <Avatar style={{ backgroundColor: "#4d4dff" }}>EN</Avatar>
          </IconButton>
          <IconButton size="medium">
            <Avatar style={{ backgroundColor: deepOrange[500] }}>EG</Avatar>
          </IconButton>
        </Grid>
        <hr />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: deepOrange[500] }}>EG</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Engineering Gang" secondary="76 members" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "#4d4dff" }}>EN</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Entrepeneurship Gang"
              secondary="23 members"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: '#ff1a1a' }}>GA</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gaming Gang" secondary="32 members" />
          </ListItem>
        </List>
      </>
    );
  }
}
