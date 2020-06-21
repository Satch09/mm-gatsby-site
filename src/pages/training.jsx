import React from "react";
import Grid from "@material-ui/core/Grid";

import { CardTraining } from "components/Cards";

import HeaderPicture from "components/HeaderPicture";

import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import page from "data/training.json";
import Rehydrate from "interactions/Rehydrate";
export default function Training() {
  return (
    <>
      <Rehydrate>
        <HeaderPicture headerProps={page.headerProps} />
        <OverhangSpacing
          mainItem={<MessageBox {...page.heading} noBottomDivider />}
        >
          <ContentLayout>
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
          </ContentLayout>
          <Footer>
            <ContactOperatingHours />
          </Footer>
        </OverhangSpacing>
      </Rehydrate>
    </>
  );
}
