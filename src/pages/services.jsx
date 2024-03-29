import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import MessageBox from "components/MessageBox";
// Icons
import AffiliatesBanner from "components/AffiliatesBanner";

import { ServicesList } from "components/Cards";
import { Grid, Container, Box, Paper } from "@material-ui/core";

import page from "data/services.json";
import { SEO } from "components/seo";
import PageLayout from "layout/PageLayout";
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

export default function Services() {
  const topContent = (
    <Box display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Paper elevation={8}>
          <MessageBox {...page.heading} noBottomDivider />
        </Paper>
      </Container>
    </Box>
  );
  const mainContent = (
    <>
      <Grid container xs={12} justify="center" align="center" spacing={2}>
        <AffiliatesBanner />
        {page.services.map(service => (
          <Grid item xs={12} sm={5} key={service.heading}>
            <ServicesList {...service} />
          </Grid>
        ))}
      </Grid>
    </>
  );
  return (
    <>
      <SEO title="Services" />
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
