import React from "react";
import {
  Grid,
  TextField,
  Card,
  Radio,
  Typography,
  CardMedia,
  CardHeader,
  CardContent,
  Fab
} from "@material-ui/core";

import { deepOrange } from "@material-ui/core/colors";
import Save from '@material-ui/icons/Save';

import EditingNavBar from "../components/EditingNavBar";

/*
 * Create Group Form
 */
export default class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gangName: "Sample Gang Name",
      location: "Sample Location",
      selectedColor: "#ff1a1a",
      bio: "Sample Bio"
    };
  }

  /*
   * Name Change Handler, changes the name in the component's state
   */
  handleNameChange = event => {
    this.setState({
      gangName: event.target.value,
      location: this.state.location,
      selectedColor: this.state.selectedColor,
      bio: this.bio
    });
  };

  /*
   * Location Change Handler, changes the location in the component's state
   */
  handleLocationChange = event => {
    this.setState({
      gangName: this.state.gangName,
      location: event.target.value,
      selectedColor: this.state.selectedColor,
      bio: this.bio
    });
  };


  /*
   * Color Change Handler, changes the color in the component's state
   */
  handleColorChange = color => {
    this.setState({
      gangName: this.state.gangName,
      location: this.state.location,
      selectedColor: color,
      bio: this.bio
    });
  };
  
  /*
   * Bio Change Handler, changes the bio in the component's state
   */
  handleBioChange = event => {
    this.setState({
      gangName: this.state.gangName,
      location: this.state.location,
      selectedColor: this.state.selectedColor,
      bio: event.target.value
    });
  };

  render() {
    return (
      <>
        <EditingNavBar title="Create Group" backNavigation="/messages" />
        <Grid
          container
          direction="column"
          justify="center"
          style={{ width: "80%", margin: "1rem auto" }}
        >
          <Card>
            <CardHeader
              title={this.state.gangName}
              subheader={this.state.location}
            />
            <CardMedia
              style={{
                height: "5rem",
                backgroundColor: this.state.selectedColor
              }}
            />
            <CardContent>
              <Typography variant="body2" component="p">
                {this.state.bio}
              </Typography>
            </CardContent>
          </Card>
          <TextField
            label="Group Name"
            variant="outlined"
            style={{ marginTop: "2rem" }}
            onChange={this.handleNameChange}
          />
          <TextField
            label="City"
            variant="outlined"
            style={{ margin: "2rem 0 2rem" }}
            onChange={this.handleLocationChange}
          />
          <TextField
            multiline
            rowsMax="4"
            label="Bio"
            variant="outlined"
            onChange={this.handleBioChange}
          />
          <Typography variant="body1">Theme Colour:</Typography>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Radio
              checked={this.state.selectedColor === "#ff1a1a"}
              onChange={() => this.handleColorChange("#ff1a1a")}
              style={{ color: "#ff1a1a" }}
            />
            <Radio
              checked={this.state.selectedColor === deepOrange[500]}
              onChange={() => this.handleColorChange(deepOrange[500])}
              style={{ color: deepOrange[500] }}
            />
            <Radio
              checked={this.state.selectedColor === "#4d4dff"}
              onChange={() => this.handleColorChange("#4d4dff")}
              style={{ color: "#4d4dff" }}
            />
            <Radio
              checked={this.state.selectedColor === "#66ff66"}
              onChange={() => this.handleColorChange("#66ff66")}
              style={{ color: "#66ff66" }}
            />
          </Grid>
          <Fab
            variant="extended"
            style={{ color: "#FCFFFC", backgroundColor: "#56D822" }}

          >
            <Save />
            Save
          </Fab>
        </Grid>
      </>
    );
  }
}
