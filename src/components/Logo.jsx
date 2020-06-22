import React from "react";

import { Fade, Container, Box } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";

// Icons

export default function Logo() {
  return (
    <>
      <Fade in={true} timeout={250}>
        <Container maxWidth="xs">
          <Box p={2}>
            <CardMedia
              component="img"
              image={require("../images/CorpMod1.png")}
            />
          </Box>
        </Container>
      </Fade>
    </>
  );
}
