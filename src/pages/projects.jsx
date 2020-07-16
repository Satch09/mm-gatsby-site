import React from "react";
import Grid from "@material-ui/core/Grid";

import MessageBox from "components/MessageBox";
import { Box } from "@material-ui/core";
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

export default function Projects() {
  return (
    <>
      <SEO title="Projects" />
      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <Section>
            <ProjectPost />
            <Grid container justify="center" xs={12} spacing={2}>
              {/* {page.projects.map(project => {
                  return (
                    <Grid item xs={12} md={10} key={project.title}>
                      <ProjectCard {...project} />
                    </Grid>
                  );
                })} */}
            </Grid>
          </Section>
        </ContentLayout>
        <Footer>
          <ContactOperatingHours />
        </Footer>
      </OverhangSpacing>
    </>
  );
}
