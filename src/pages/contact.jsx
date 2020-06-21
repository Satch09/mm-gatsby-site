import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardContact from "components/Cards/CardContact";
import { Box } from "@material-ui/core";
import HeaderPicture from "components/HeaderPicture";

import HeaderSection from "layout/HeaderSection";
import page from "data/contact.json";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import { RingSpinner } from "react-spinners-kit";
import Spinner from "components/Spinner";
export default function Contact() {
  const [hasMounted, setHasMounted] = useState(false);

  // const inputEl = useRef(null);
  useEffect(() => {
    setTimeout(() => setHasMounted(true), 3000);

    // window.scrollTo({
    //   behavior: "smooth",
    //   top: inputEl.current.offsetTop,
    // });
    // inputEl.current.focus();
    return () => {};
  }, []);

  if (!hasMounted) {
    return <Spinner />;
  }
  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />

      <HeaderSection>
        <Grid container justify="center">
          <Box p={3}>
            <Typography variant="h4">Departments</Typography>
          </Box>
        </Grid>
        <Grid container justify="center" sx={12}>
          {page.contacts.map(course => {
            return <CardContact key={course.name} {...course} />;
          })}
        </Grid>
      </HeaderSection>
      <Footer>
        <ContactOperatingHours />
      </Footer>
    </>
  );
}
