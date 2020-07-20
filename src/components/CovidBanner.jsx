import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Box, Button, Container } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import ExternalLink from "components/ExternalLink";
import FadeIn from "interactions/FadeIn";
// Icons
const useStyles = makeStyles(theme => ({
  banner: {
    // backgroundColor: "rgba(0,0,0,0.9)",
  },
}));

export default function CovidBanner({ onClick }) {
  const classes = useStyles();
  const linkProps = {
    href: "https://www.sacoronavirus.co.za",
  };
  return (
    <>
      <FadeIn>
        <Grid container justify="center" align="center" xs={12} spacing={0}>
          <div style={{ display: "flex" }}>
            <Container onClick={onClick}>
              <Box p={2} className={classes.banner}>
                <Typography variant="body1" style={{ color: "white" }}>
                  We are committed to our clients during the global pandemic.
                </Typography>
                <ExternalLink {...linkProps}>
                  <Button>
                    <Typography
                      variant="h5"
                      style={{
                        color: "white",
                        fontSize: "calc( 1.0em + 0.5vw )",
                      }}
                    >
                      For information on COVID-19 please click here
                    </Typography>
                  </Button>
                </ExternalLink>
              </Box>
            </Container>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onClick}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        </Grid>
      </FadeIn>
    </>
  );
}
