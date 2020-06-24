import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box, Paper, Container, Button, Dialog } from "@material-ui/core";
import HeaderPicture from "components/Header";

import HeaderSection from "layout/HeaderSection";
import page from "data/contact.json";
import Footer from "components/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import Rehydrate from "interactions/Rehydrate";
import Section from "layout/Section";
import { Call } from "components/Contact";
import { Fax } from "components/Contact";
import { OperatingHoursNormal } from "components/OperatingHours";
import { TrainingTracker } from "components/Contact";
import Spinner from "components/Spinner";
import { PulseSpinner } from "react-spinners-kit";
export default function Contact() {
  const foo = 1;
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
            <Box>
              <Box m={2} display="flex" justifyContent="center">
                <Paper style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                  <Box p={2} style={{ width: "100%" }}>
                    <Call variant="small" />
                  </Box>
                  <Box p={2} style={{ width: "100%" }}>
                    <Fax variant="small" />
                  </Box>
                </Paper>
              </Box>

              <Box
                p={2}
                marginBottom={2}
                display="flex"
                justifyContent="center"
                style={{ width: "100%", backgroundColor: "black" }}
              >
                <PulseSpinner size={80} color="#686769" />
              </Box>
            </Box>
            <TrainingTracker />
          </Section>
        </HeaderSection>
        <Footer>
          <ContactOperatingHours />
        </Footer>
      </Rehydrate>
    </>
  );
}
