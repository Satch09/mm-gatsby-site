import React from "react";
import LogoImage from "static/images/LogoWebsite.jpg";
import { Fade, Container, Box, Paper } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Rehydrate from "interactions/Rehydrate";

// Icons

export default function Logo() {
  return (
    <>
      <Rehydrate>
        <Fade in={true} timeout={250}>
          <Container maxWidth="xs">
            <Paper>
              <Box p={1}>
                <CardMedia component="img" alt="logo" image={LogoImage} />
              </Box>
            </Paper>
          </Container>
        </Fade>
      </Rehydrate>
    </>
  );
}
