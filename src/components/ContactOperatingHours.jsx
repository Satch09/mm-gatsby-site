import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Box, Button, Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import OperationHours from "components/OperationHours";
// Icons

import ExternalLink from "./ExternalLink";
import Location from "./Location";
import Call from "./Call";
import OperationHoursAfter from "./OperationHoursAfter";
import Fax from "./Fax";
import Postal from "./Postal";

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
        boxShadow={3}
        xs={12}
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
        <SpacedGrid>
          <Box m={1}>
            <OperationHours />
          </Box>

          <Divider orientation="horizontal" />

          <Box m={1}>
            <OperationHoursAfter />
          </Box>
        </SpacedGrid>
        <Divider orientation="vertical" flexItem />
        <SpacedGrid>
          <Box m={1} display="flex" justifyContent="center">
            <Call />
          </Box>
          <Divider orientation="horizontal" />
          <Box m={1} display="flex" justifyContent="center">
            <Fax />
          </Box>
        </SpacedGrid>
        <Divider orientation="vertical" flexItem />
        <SpacedGrid>
          <Box m={1}>
            <ExternalLink {...locationLink}>
              <Location />
            </ExternalLink>
          </Box>
          <Divider orientation="horizontal" />
          <Box m={1}>
            <Postal />
          </Box>
        </SpacedGrid>
      </ContainerGrid>
    </>
  );
}
