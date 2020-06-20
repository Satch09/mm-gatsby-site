import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box } from "@material-ui/core";
import HeaderPicture from "components/HeaderPicture";

import HeaderSection from "layout/HeaderSection";
import page from "data/contact.json";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

export default function Contact() {
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
