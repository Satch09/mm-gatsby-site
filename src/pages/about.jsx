import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";
import HeaderPicture from "components/HeaderPicture";
import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import OverhangSpacing from "layout/OverhangSpacing";

import page from "data/about.json";
// const useStyles = makeStyles((theme) => ({
//   ...theme.customProperties,
//   root: {
//     // flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   headerMargin: {
//     marginBottom: theme.spacing(4),
//   },
// }));

export default function About() {
  // const classes = useStyles();
  return (
    <>
      {/* <Header headerProps={page.headerProps} /> */}
      <HeaderPicture headerProps={page.headerProps} />
      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <Grid container justify="space-around" spacing={0}>
            <Grid item xs={12} sm={5}>
              <Typography variant="h4" component="h1">
                {page.principlesAndValues.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {page.principlesAndValues.body}
              </Typography>

              {page.principlesAndValues.items.map(principle => (
                <Box m={2} p={1} key={principle.title}>
                  <Typography variant="h5" component="h2">
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {principle.body}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h4" component="h1">
                {page.bee.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {page.bee.body}
              </Typography>

              {page.bee.items.map(bee => (
                <Box m={2} p={1} key={bee.title}>
                  <Typography variant="h5" component="h2">
                    {bee.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {bee.body}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </ContentLayout>
        <Footer>
          <ContactOperatingHours />
        </Footer>
      </OverhangSpacing>
    </>
  );
}
