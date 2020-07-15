import React from "react";
import LogoImage from "static/images/LogoWebsiteSite.png";
import { Fade, Container, Box, Paper } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Rehydrate from "interactions/Rehydrate";
import SVGLogo from "static/images/LogoWebsiteSVG";

// Icons

export default function Logo() {
  return (
    <>
      <Rehydrate>
        <Container maxWidth="xs">
          <Paper>
            <Box
              p={1}
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              <SVGLogo />
            </Box>
          </Paper>
        </Container>
      </Rehydrate>
    </>
  );
}
