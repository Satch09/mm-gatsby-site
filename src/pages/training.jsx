import React from "react";
import Grid from "@material-ui/core/Grid";

import { CardTraining } from "components/Cards";

import HeaderPicture from "layout/Header";

import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import page from "data/training.json";
import Section from "layout/Section";
import SEO from "components/seo";
export default function Training() {
  return (
    <>
      <SEO title="Training" />
      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <Section>
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
          </Section>
        </ContentLayout>
        <Footer>
          <ContactOperatingHours />
        </Footer>
      </OverhangSpacing>
    </>
  );
}
