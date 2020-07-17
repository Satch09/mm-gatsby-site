import React from "react";
import Grid from "@material-ui/core/Grid";

import MessageBox from "components/MessageBox";
import { Box, Container, Paper } from "@material-ui/core";
import HeaderPicture from "layout/Header";
import { ProjectCard } from "components/Cards";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import page from "data/projects.json";
import Section from "layout/Section";
import ProjectPost from "components/Cards/ProjectPost";
import SEO from "components/seo";
import PageLayout from "layout/PageLayout";

export default function Projects() {
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="lg">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );
  const mainContent = <ProjectPost />;
  return (
    <>
      <SEO title="Projects" />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
