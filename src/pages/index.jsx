import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link as Go } from "gatsby";

import MessageBox from "components/MessageBox";
import { Box, Paper, Container, Snackbar } from "@material-ui/core";
// Icons

import QuickLinks from "components/QuickLinks";
import page from "data/home.json";
import { SEO } from "components/seo";
import PageLayout from "layout/PageLayout";

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

const IndexPage = () => {
  const classes = useStyles();

  const topContent = (
    <Container maxWidth="md">
      <Paper elevation={8}>
        <QuickLinks />
      </Paper>
    </Container>
  );
  const mainContent = (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justify="center"
      align="center"
      spacing={2}
    >
      {page.topics.map(topic => (
        <Grid item md={3} xs={12} key={topic.heading}>
          <Box style={{ height: "100%" }}>
            <Go to={topic.link} style={{ textDecoration: "none" }}>
              <Paper style={{ minHeight: "100%" }} className={classes.heading}>
                <MessageBox {...topic} noBottomDivider />
              </Paper>
            </Go>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
  return (
    <>
      <SEO />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
};

export default IndexPage;
