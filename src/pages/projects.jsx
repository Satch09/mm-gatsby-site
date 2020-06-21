import React from "react";
import Grid from "@material-ui/core/Grid";

import MessageBox from "components/MessageBox";
import { Box } from "@material-ui/core";
import HeaderPicture from "components/HeaderPicture";
import CardWithSideImage from "components/Cards/CardWithSideImage";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import page from "data/projects.json";
import Rehydrate from "interactions/Rehydrate";

export default function Projects() {
  return (
    <>
      <Rehydrate>
        <HeaderPicture headerProps={page.headerProps} />
        <OverhangSpacing
          mainItem={<MessageBox {...page.heading} noBottomDivider />}
        >
          <ContentLayout>
            <Box m={2} p={2}>
              <Grid container justify="center" xs={12} spacing={2}>
                {page.projects.map((project, index) => {
                  return (
                    <Grid item xs={12} md={10} key={project.title}>
                      {console.log((index + 1) % 2 === 0)}
                      <CardWithSideImage {...project} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </ContentLayout>
          <Footer>
            <ContactOperatingHours />
          </Footer>
        </OverhangSpacing>
      </Rehydrate>
    </>
  );
}
