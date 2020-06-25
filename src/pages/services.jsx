import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import MessageBox from "components/MessageBox";
// Icons
import HeaderPicture from "layout/Header";
import AffiliatesBanner from "components/AffiliatesBanner";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import { ServicesList } from "components/Cards";
import { Grid, Container } from "@material-ui/core";

import page from "data/services.json";
import Rehydrate from "interactions/Rehydrate";
import Section from "layout/Section";
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
  return (
    <>
      <Rehydrate>
        <HeaderPicture headerProps={page.headerProps} />

        <OverhangSpacing
          mainItem={<MessageBox {...page.heading} noBottomDivider />}
        >
          <ContentLayout>
            <Section>
              <AffiliatesBanner />
              <Grid
                container
                xs={12}
                justify="center"
                align="center"
                spacing={2}
              >
                {page.services.map(service => (
                  <Grid item xs={12} sm={5} key={service.heading}>
                    <ServicesList {...service} />
                  </Grid>
                ))}
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
