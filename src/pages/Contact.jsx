import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box, Button, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// Icons

import HeaderPicture from "components/HeaderPicture";

import ContactDialog from "components/ContactDialog";
import ContentLayout from "layout/ContentLayout";
import HeaderSection from "layout/HeaderSection";
import FadeIn from "interactions/FadeIn";

import page from "data/contact.json";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

const useStyles = makeStyles(theme => ({
  ...theme.customProperties,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />

      <HeaderSection>
        <Grid container justify="center">
          <Box p={3}>
            <Typography variant="h4">Departments</Typography>
          </Box>
        </Grid>
        <Grid container justify="center" sx={12}>
          {page.contacts.map(course => {
            return <CardContact key={course.name} {...course} />;
          })}
        </Grid>
      </HeaderSection>
      <Footer>
        <ContactOperatingHours />
      </Footer>
    </>
  );
}
