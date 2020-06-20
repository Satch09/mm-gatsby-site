import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import CardTraining from "components/Cards/CardTraining";
import { Box, Slide, Paper, GridList } from "@material-ui/core";

import HeaderPicture from "components/HeaderPicture";

import MessageBox from "components/MessageBox";
import HeaderSection from "layout/HeaderSection";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import page from "data/training.json";
const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
export default function Training() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}
