import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import MessageBox from "components/MessageBox";
// Icons
import HeaderPicture from "components/HeaderPicture";
import AffiliatesBanner from "components/AffiliatesBanner";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import ServicesList from "components/Cards/ServicesList";
import { Grid } from "@material-ui/core";

import page from "data/services.json";
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
  const [hasMounted, setHasMounted] = useState(false);

  // const inputEl = useRef(null);
  useEffect(() => {
    setHasMounted(true);

    // window.scrollTo({
    //   behavior: "smooth",
    //   top: inputEl.current.offsetTop,
    // });
    // inputEl.current.focus();
    return () => {};
  }, []);

  if (!hasMounted) {
    return null;
  }
  // const classes = useStyles();
  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />

      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <AffiliatesBanner />
          {/* <Grid
            container
            display="flex"
            flexDirection="row"
            justify="center"
            align="center"
            spacing={2}>
            {page.services.map((service) => (
              <ServicesList key={service.heading} {...service} />
            ))}
          </Grid> */}

          <Grid container xs={12} justify="center" align="center" spacing={2}>
            {page.services.map(service => (
              <Grid item xs={12} sm={5} key={service.heading}>
                <ServicesList {...service} />
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
