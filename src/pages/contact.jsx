import React from "react";
import Grid from "@material-ui/core/Grid";

import CardContact from "components/Cards/CardContact";
import { Box, Paper, Container, Button, Dialog } from "@material-ui/core";

import page from "data/contact.json";

import { SEO } from "components/seo";
import PageLayout from "layout/PageLayout";
import MessageBox from "components/MessageBox";
export default function Contact() {
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );
  const mainContent = (
    <>
      <Grid container justify="center">
        {page.contacts.map(course => {
          return <CardContact key={course.name} {...course} />;
        })}
      </Grid>
    </>
  );
  return (
    <>
      <SEO title="Contact" />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
