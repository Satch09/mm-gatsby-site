import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Box, Button, Container } from "@material-ui/core";

import ExternalLink from "components/ExternalLink";
import FadeIn from "interactions/FadeIn";
// Icons
const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
}));

export default function CovidBanner() {
  const [hasMounted, setHasMounted] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setHasMounted(true);

    return () => {};
  }, []);

  // if (!hasMounted) {
  //   return null;
  // }
  const linkProps = {
    href: "https://www.sacoronavirus.co.za",
  };
  return (
    <>
      <FadeIn>
        <Grid
          container
          justify="center"
          align="center"
          xs={12}
          sm={8}
          spacing={0}
        >
          <Container maxWidth="md">
            <Box m={2} p={2} boxShadow={6} className={classes.banner}>
              <Typography variant="body1" style={{ color: "white" }}>
                We are committed to our clients during the global pandemic.
              </Typography>
              <ExternalLink {...linkProps}>
                <Button>
                  <Typography
                    variant="h5"
                    style={{
                      color: "white",
                      fontSize: "calc( 1.1em + 0.5vw )",
                    }}
                  >
                    For information on COVID-19 please click here
                  </Typography>
                </Button>
              </ExternalLink>
            </Box>
          </Container>
        </Grid>
      </FadeIn>
    </>
  );
}
