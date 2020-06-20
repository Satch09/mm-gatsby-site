import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
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
// const useStyles = makeStyles((theme) => ({
//   ...theme.customProperties,
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },

//   overlay: {
//     backgroundColor: "black",
//     opacity: "0.8",
//     minWidth: "50vw",
//     maxWidth: "80vh",
//     minHeight: "30vh",
//   },
//   boxes: {
//     minWidth: "200px",
//     minHeight: "200px",
//     margin: theme.spacing(4),
//   },
// }));

export default function Projects() {
  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />
      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <Box m={2} p={2}>
            <Grid container justify="center" xs={12} spacing={2}>
              {page.projects.map((project, index) => {
                return (
                  <Grid item xs={12} md={6} key={project.title}>
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
    </>
  );
}
