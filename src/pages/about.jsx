import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Box, Button, Paper, Link } from "@material-ui/core";
import HeaderPicture from "layout/Header";
import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import OverhangSpacing from "layout/OverhangSpacing";

import page from "data/about.json";
import Rehydrate from "interactions/Rehydrate";
import Section from "layout/Section";
import SEO from "components/seo";

export default function About() {
  return (
    <>
      <Rehydrate>
        <SEO title="About" />
        <HeaderPicture headerProps={page.headerProps} />
        <OverhangSpacing
          mainItem={<MessageBox {...page.heading} noBottomDivider />}
        >
          <ContentLayout>
            <Section>
              <Box marginBottom={4} p={1}>
                <Typography variant="h5" component="h2">
                  Our Beginning
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {page.history.body.map(line => (
                    <Box component="p" key={line}>
                      {line}
                    </Box>
                  ))}
                </Typography>
              </Box>
              <Grid container justify="space-around" spacing={0}>
                <Grid item xs={12} sm={5}>
                  <Typography variant="h5" component="h1">
                    {page.principlesAndValues.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {page.principlesAndValues.body}
                  </Typography>
                  {page.principlesAndValues.items.map(principle => (
                    <Box m={2} key={principle.title}>
                      <Typography variant="h6" component="h2">
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
                  <Typography variant="h5" component="h1">
                    {page.bee.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {page.bee.body}
                  </Typography>
                  {page.bee.items.map(bee => (
                    <Box m={2} p={1} key={bee.title}>
                      <Typography variant="h6" component="h2">
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
                  <Box dispay="flex" justifyContent="center" m={2} p={1}>
                    <Typography variant="h6" component="h2">
                      Certification
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      We are currently level 2 certified SME - Our certificate
                      is available for download{" "}
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
            </Section>
          </ContentLayout>
          <Footer>
            <ContactOperatingHours />
          </Footer>
        </OverhangSpacing>
      </Rehydrate>
    </>
  );
}
