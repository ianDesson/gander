import React from "react";
import NavBar from "../components/NavBar";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Add from "@material-ui/icons/Add";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@material-ui/core";

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
          <IconButton>
            <Avatar>
              <Add />
            </Avatar>
          </IconButton>
          <hr style={{ margin: "0 1rem 0 1rem" }} />
          <IconButton size="medium">
            <Avatar>GA</Avatar>
          </IconButton>
          <IconButton size="medium">
            <Avatar>EN</Avatar>
          </IconButton>
          <IconButton size="medium">
            <Avatar>EG</Avatar>
          </IconButton>
        </Grid>
        <hr />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                GA
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gaming Gang" secondary="76 members" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                EN
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Entrepeneurship Gang" secondary="23 members" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                EG
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Engineering Gang" secondary="32 members" />
          </ListItem>

        </List>
      </>
    );
  }
}
