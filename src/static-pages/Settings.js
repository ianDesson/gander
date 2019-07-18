import React from "react";

import {
  Grid,
  TextField,
  Typography,
  Radio,
  Button,
  Fab,
  createMuiTheme
} from "@material-ui/core";

import Save from "@material-ui/icons/Save";
import EditingNavBar from "../components/EditingNavBar";
import { ThemeProvider } from "@material-ui/styles";

/*
 * Component for the Settings page
 */

const Settings = () => {
  // Used for showing which radio button is selects
  const [selected, setSelected] = React.useState(0);
  // Theme for Buttons
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#56D822"
      },
      secondary: {
        main: "#ff3333"
      }
    }
  });

  return (
    <div>
      <EditingNavBar title="Settings" backNavigation="/profile" />
      <Grid
        container
        direction="column"
        justify="space-between"
        style={{ width: "80%", margin: "2rem auto" }}
      >
        <TextField
          variant="outlined"
          label="Change Email"
          style={{ margin: "1.5rem 0 1.5rem 0" }}
        />
        <div
          style={{
            margin: "1.5rem 0 1.5rem 0",
            border: "solid 2px #2D3A3A",
            borderRadius: "1rem",
            padding: "0.5rem"
          }}
        >
          <Typography variant="h4">Show:</Typography>
          <Grid container direction="row" justify="space-evenly">
            <ThemeProvider theme={theme}>
              <Grid item>
                <Typography variant="body2">Nearby Gangs</Typography>
                <Radio
                  checked={selected === 0}
                  onChange={() => setSelected(0)}
                  color="primary"
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">All Gangs</Typography>
                <Radio
                  checked={selected === 1}
                  onChange={() => setSelected(1)}
                  color="primary"
                />
              </Grid>
            </ThemeProvider>
          </Grid>
        </div>
        <Fab
          variant="extended"
          style={{
            color: "#FCFFFC",
            backgroundColor: "#56D822",
            margin: "1.5rem 0 1.5rem 0"
          }}
          href="/profile"
        >
          <Save />
          Save
        </Fab>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="secondary"
            style={{ margin: "1.5rem 0 1.5rem 0" }}
            href="/"
          >
            Sign Out
          </Button>
        </ThemeProvider>
      </Grid>
    </div>
  );
};
export default Settings;
