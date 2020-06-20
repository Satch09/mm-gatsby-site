import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Typist from "react-typist";

import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  banner: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  slogan: {
    minHeight: "calc(1.5vh + 1.7vw + 25px)",
  },
}));

export default function Slogan() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.slogan}>
        <Typist
          startDelay={1000}
          cursor={{ show: false }}
          avgTypingDelay={60}
          stdTypingDelay={10}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              style={{
                color: "white",
                fontSize: "calc(1.5vh + 1.7vw + 10px)",
              }}
            >
              Leaders in service
              <Typist.Backspace count={7} delay={1200} />
              solutions
              <Typist.Backspace count={9} delay={1200} />
              automation
            </Typography>
          </Box>
        </Typist>
      </Grid>
    </>
  );
}
