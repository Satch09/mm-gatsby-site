import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import CardTraining from "components/Cards/CardTraining";

import HeaderPicture from "components/HeaderPicture";

import MessageBox from "components/MessageBox";
import ContentLayout from "layout/ContentLayout";
import OverhangSpacing from "layout/OverhangSpacing";
import Footer from "components/Footer/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";

import page from "data/training.json";
import Spinner from "components/Spinner";
export default function Training() {
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
    return <Spinner />;
  }
  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />
      <OverhangSpacing
        mainItem={<MessageBox {...page.heading} noBottomDivider />}
      >
        <ContentLayout>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justify="start"
            align="center"
            spacing={2}
          >
            {page.courses.map(course => (
              <Grid item md={4} xs={12} key={course.heading}>
                <CardTraining {...course} />
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
