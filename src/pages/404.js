import React from "react";
import MessageBox from "components/MessageBox";
import { Box, Paper, Container } from "@material-ui/core";

import page from "data/notFound.json";
import SEO from "components/seo";
import PageLayout from "layout/PageLayout";

export default function notFound() {
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );

  return (
    <>
      <SEO title="Not Found" />
      <PageLayout topContent={topContent} />
    </>
  );
}
