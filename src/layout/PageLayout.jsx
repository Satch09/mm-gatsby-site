import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link as Go } from "gatsby";

import MessageBox from "components/MessageBox";
import HeaderPicture from "layout/Header";
import { Box, Paper, Container } from "@material-ui/core";
// Icons

import QuickLinks from "components/QuickLinks";
import ContentLayout from "layout/ContentLayout";
import CovidBanner from "components/CovidBanner";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import OverhangSpacing from "layout/OverhangSpacing";
import page from "data/home.json";
import EmailSignUp from "components/EmailSignUp";
import Section from "layout/Section";
import { SEO } from "components/seo";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  root: {},
  paper: {
    padding: theme.spacing(1),
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

const PageLayout = ({ topContent, mainContent }) => {
  const classes = useStyles();
  const inputEl = useRef(null);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: inputEl,
    });
    inputEl.current.focus();
    return () => {};
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "-5vh",
            width: "100%",
          }}
        >
          {topContent ? topContent : null}
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <div ref={inputEl}>
            <Section>{mainContent ? mainContent : null}</Section>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: "5vh",
            width: "100%",
          }}
        >
          <Footer>
            <ContactOperatingHours />
          </Footer>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
