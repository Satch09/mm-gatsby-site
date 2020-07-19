import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import {
  Box,
  Button,
  Paper,
  Link,
  Container,
  Divider,
} from "@material-ui/core";
import MessageBox from "components/MessageBox";

import page from "data/about.json";
import SEO from "components/seo";
import PageLayout from "layout/PageLayout";
const useStyles = makeStyles(theme => ({
  ...theme.customProperties,
  leftSection: {
    "&:last-child": {
      marginBottom: theme.spacing(12),
    },
  },
}));
export default function About() {
  const classes = useStyles();
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="lg">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );
  const mainContent = (
    <Paper>
      <Box marginBottom={4} p={1}>
        <Typography variant="h4" component="h2">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.6rem"
            height="4em"
            paddingX="1em"
          >
            {"Our Beginning".toUpperCase()}
          </Box>
        </Typography>
        <Divider variant="middle" />
        <Box
          marginY={3}
          paddingX={3}
          display="flex"
          justify="center"
          alignItems="center"
          minHeight="12vh"
        >
          <Typography variant="body1" color="textSecondary" component="p">
            {page.history.body.map(line => (
              <Box component="p" key={line}>
                {line}
              </Box>
            ))}
          </Typography>
        </Box>
      </Box>
      <Grid container justify="space-around" spacing={0}>
        <Grid item xs={12} sm={5}>
          <Box m={2}>
            <Typography variant="h5" component="h2">
              {page.principlesAndValues.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {page.principlesAndValues.body}
            </Typography>
          </Box>
          {page.principlesAndValues.items.map(principle => (
            <div className={classes.leftSection} key={principle.title}>
              <Box m={3}>
                <Typography variant="h6" component="h2">
                  {principle.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {principle.body}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box m={2}>
            <Typography variant="h5" component="h2">
              {page.bee.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {page.bee.body}
            </Typography>
          </Box>
          {page.bee.items.map(bee => (
            <Box m={3} key={bee.title}>
              <Typography variant="h6" component="h2">
                {bee.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {bee.body}
              </Typography>
            </Box>
          ))}
          <Box dispay="flex" justifyContent="center" m={2} p={1}>
            <Typography variant="h6" component="h2">
              Certification
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              We are currently level 2 certified SME - Our certificate is
              available for download{" "}
              <Link
                href=""
                onClick={e => {
                  e.preventDefault();
                  alert("download cert");
                }}
              >
                here
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
  return (
    <>
      <SEO title="About" />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
