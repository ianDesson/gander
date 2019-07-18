import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import Cancel from "@material-ui/icons/Cancel";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import {
  createMuiTheme,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

/*
 * Component for the Main App Page (GangView page)
 */
export default class GangView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  /*
   * Event handler for cycling through the list of available gangs
   */
  incrementCurrentIndex = () => {
    this.setState({ currentIndex: (this.state.currentIndex + 1) % 3 });
  };
  /*
   * Hardcoded List of gangs with their name, bio, and banner image file name
   */
  gangs = [
    {
      name: "Gaming Gang",
      description:
        "A gang of friends who play all sorts of video games together!",
      imageFileName: "gaming.png"
    },
    {
      name: "Entrepeneurship Gang",
      description: "A gang of entrepeneurs who discuss anything business!",
      imageFileName: "entrepeneurship.png"
    },
    {
      name: "Engineering Gang",
      description: "A gang of Engineers drinking coffee to meet deadlines.",
      imageFileName: "engineering.png"
    }
  ];

  /*
   * Color theme for the like/dislike button
   */
  buttonTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#56D822"
      },
      secondary: {
        main: "#ff1a1a"
      }
    }
  });

  render() {
    return (
      <>
        <NavBar page='gangview'/>
        <div style={{ margin: "0 auto", width: "75%" }}>
          <div>
            <Card>
              <CardHeader
                title={this.gangs[this.state.currentIndex].name}
                subheader="Ottawa, ON"
              />

              <CardMedia
                style={{height: "20rem", backgroundSize: "contain"}}
                image={this.gangs[this.state.currentIndex].imageFileName}
                title={this.gangs[this.state.currentIndex].name}
              />

              <CardContent>
                <Typography variant="body2" component="p">
                  {this.gangs[this.state.currentIndex].description}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <ThemeProvider theme={this.buttonTheme}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-end"
            >
              <IconButton
                color="secondary"
                size="medium"
                onClick={this.incrementCurrentIndex}
              >
                <Cancel fontSize="large" color="inherit" />
              </IconButton>
              <IconButton
                color="primary"
                size="medium"
                onClick={this.incrementCurrentIndex}
              >
                <CheckOutlined fontSize="large" />
              </IconButton>
            </Grid>
          </ThemeProvider>
        </div>
      </>
    );
  }
}
