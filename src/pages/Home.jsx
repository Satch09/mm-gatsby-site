import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";

import MessageBox from "components/MessageBox";
import Header from "components/Header";
import HeaderPicture from "components/HeaderPicture";
import { Box, Paper, Container, Grow } from "@material-ui/core";
//import Link from "@material-ui/core/Link";
// Icons

import QuickLinks from "components/QuickLinks";
import ContentLayout from "layout/ContentLayout";
import HeaderSection from "layout/HeaderSection";
import CovidBanner from "components/CovidBanner";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import OverhangSpacing from "layout/OverhangSpacing";
import HeroCover from "components/HeroCover";
import { Popover } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  root: {},
  paper: {
    padding: theme.spacing(2),
  },
  heading: {
    minHeight: "350px",
  },

  overlay: {
    backgroundColor: "black",
    opacity: "0.8",
    minWidth: "50vw",
    maxWidth: "80vh",
    minHeight: "30vh",
  },
  boxes: {
    minWidth: "200px",
    minHeight: "200px",
    margin: theme.spacing(4),
  },
  shadow: {
    boxShadow: "inset 0px -30px 21px -8px rgba(0,0,0,0.57)",
  },
}));

export default function Home({ page }) {
  const classes = useStyles();
  // const inputEl = useRef(null);
  useEffect(() => {
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: inputEl.current.offsetTop,
    // });
    // inputEl.current.focus();
    return () => {};
  }, []);

  const headerPropsWithOptions = {
    ...page.headerProps,
    options: { slogan: true },
  };

  return (
    <>
      <HeaderPicture minHeight="50vh" headerProps={headerPropsWithOptions}>
        <CovidBanner />
      </HeaderPicture>
      <OverhangSpacing mainItem={<QuickLinks />}>
        <ContentLayout>
          {/* <div ref={inputEl}></div> */}

          <Grid
            container
            display="flex"
            flexDirection="row"
            justify="space-around"
            align="center"
            spacing={2}
          >
            {page.topics.map(topic => (
              <Grid item md={3} xs={12} key={topic.heading}>
                <Box style={{ height: "100%" }}>
                  <Link to={topic.link} style={{ textDecoration: "none" }}>
                    <Paper
                      style={{ height: "100%" }}
                      className={classes.heading}
                    >
                      <MessageBox {...topic} noBottomDivider />
                    </Paper>
                  </Link>
                </Box>
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
