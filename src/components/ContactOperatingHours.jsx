import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Box, Button, Container, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
// Icons

import ExternalLink from "./ExternalLink";
import { StreetAddress, PostalAddress } from "./Address";
import { OperatingHoursNormal, OperatingHoursAfter } from "./OperatingHours";
import { Call, Fax } from "./Contact";
import EmailSignUp from "./EmailSignUp";
const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    flexGrow: 1,
    backgroundImage: "linear-gradient( to bottom, #c43435 50%, #FF1940 )",
    color: "white",
    width: "100%",
    padding: "30px",
  },
}));

export default function ContactOperatingHours() {
  const classes = useStyles();
  const locationLink = {
    href:
      "https://www.google.com/maps/place/M+and+M+Electronics/@-33.7119894,18.9746,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcd07f2f679697d:0x7a86ea7263601aeb!8m2!3d-33.7119894!4d18.976794",
  };

  const ContainerGrid = ({ children }) => {
    return (
      <Grid
        className={classes.root}
        container
        justify="space-around"
        alignItems="center"
      >
        {children}
      </Grid>
    );
  };

  const SpacedGrid = ({ children }) => {
    return (
      <Grid item xs={12} display="flex" justify="center" sm={3}>
        {children}
      </Grid>
    );
  };
  return (
    <>
      <ContainerGrid>
        <Paper>
          <Box paddingY={1} m={1}>
            <EmailSignUp />
          </Box>
        </Paper>
        <Divider orientation="vertical" flexItem />
        <SpacedGrid>
          <Box p={1}>
            <OperatingHoursNormal />
          </Box>
          <Box p={1}>
            <OperatingHoursAfter />
          </Box>
          {/* <Box p={1} display="flex" justifyContent="center">
            <Call />
          </Box>
          <Divider orientation="horizontal" />
          <Box p={1} display="flex" justifyContent="center">
            <Fax />
          </Box> */}
        </SpacedGrid>
        <Divider orientation="vertical" flexItem />
        <SpacedGrid>
          <Box p={1}>
            <ExternalLink {...locationLink}>
              <StreetAddress />
            </ExternalLink>
          </Box>
          <Box p={1}>
            <PostalAddress />
          </Box>
        </SpacedGrid>
      </ContainerGrid>
    </>
  );
}
