import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Box, Button, Paper } from "@material-ui/core";
import HeaderPicture from "components/Header";
import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import Footer from "components/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import OverhangSpacing from "layout/OverhangSpacing";

import page from "data/about.json";
import Rehydrate from "interactions/Rehydrate";
import Section from "layout/Section";

export default function About() {
  return (
    <>
      <Rehydrate>
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
                  {page.history.body}
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
                      We are currently level 4 certified SME. Our certificate is
                      available below.
                    </Typography>
                    <Box m={2}>
                      <Button variant="outlined">Download</Button>
                    </Box>
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
