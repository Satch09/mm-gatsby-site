import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box, Paper, Container, Button, Dialog } from "@material-ui/core";
import HeaderPicture from "layout/Header";

import HeaderSection from "layout/HeaderSection";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import Section from "layout/Section";
import { TrainingTracker } from "components/Contact";
import SEO from "components/seo";
import PageLayout from "layout/PageLayout";
import MessageBox from "components/MessageBox";
export default function Contact() {
  const mainContent = (
    <>
      <Grid container justify="center">
        <TrainingTracker />
      </Grid>
    </>
  );
  return (
    <>
      <PageLayout mainContent={mainContent} />
    </>
  );
}
