import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box } from "@material-ui/core";
import HeaderPicture from "components/Header";

import HeaderSection from "layout/HeaderSection";
import page from "data/contact.json";
import Footer from "components/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import Rehydrate from "interactions/Rehydrate";
import Section from "layout/Section";
export default function Contact() {
  return (
    <>
      <Rehydrate>
        <HeaderPicture headerProps={page.headerProps} />
        <HeaderSection>
          <Section>
            <Box p={2}>
              <Typography variant="h4">Departments</Typography>
            </Box>
            <Grid container justify="center">
              {page.contacts.map(course => {
                return <CardContact key={course.name} {...course} />;
              })}
            </Grid>
          </Section>

          <Grid container justify="center" sx={12}></Grid>
        </HeaderSection>
        <Footer>
          <ContactOperatingHours />
        </Footer>
      </Rehydrate>
    </>
  );
}
