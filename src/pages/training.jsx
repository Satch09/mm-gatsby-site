import React from "react";
import Grid from "@material-ui/core/Grid";

import { CardTraining } from "components/Cards";

import MessageBox from "components/MessageBox";

import page from "data/training.json";
import { SEO } from "components/seo";
import PageLayout from "layout/PageLayout";
import { Box, Container, Paper } from "@material-ui/core";
export default function Training() {
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
    <Grid
      container
      display="flex"
      flexDirection="row"
      justify="start"
      align="center"
      spacing={2}
    >
      {page.courses.map(course => (
        <Grid item md={4} xs={12} key={course.heading}>
          <CardTraining {...course} />
        </Grid>
      ))}
    </Grid>
  );
  return (
    <>
      <SEO title="Training" />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
