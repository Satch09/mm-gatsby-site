import React from "react";
import LogoImage from "static/images/LogoWebsiteSite.png";
import { Fade, Container, Box } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Rehydrate from "interactions/Rehydrate";

// Icons

export default function Logo() {
  return (
    <>
      <Rehydrate>
        <Fade in={true} timeout={250}>
          <Container maxWidth="xs">
            <Box p={1}>
              <CardMedia component="img" image={LogoImage} />
            </Box>
          </Container>
        </Fade>
      </Rehydrate>
    </>
  );
}
