import React from "react";

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
            <Box p={2}>
              <CardMedia
                component="img"
                image={require("static/images/LogoWebsiteSite.png")}
              />
            </Box>
          </Container>
        </Fade>
      </Rehydrate>
    </>
  );
}
