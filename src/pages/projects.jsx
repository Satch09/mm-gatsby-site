import React from "react";

import MessageBox from "components/MessageBox";
import { Box, Container, Paper } from "@material-ui/core";

import page from "data/projects.json";
import { SEO } from "components/seo";
import PageLayout from "layout/PageLayout";

export default function Projects() {
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );
  // const mainContent = <ProjectPost />;
  return (
    <>
      <SEO title="Projects" />
      <PageLayout topContent={topContent} />
    </>
  );
}
