import React from "react";

import PageLayout from "layout/PageLayout";
import Grid from "@material-ui/core/Grid";
import { TrainingTracker } from "components/Contact";
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
