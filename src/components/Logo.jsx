import React from "react";
import Grid from "@material-ui/core/Grid";

import { Paper, Fade, Container, Box } from "@material-ui/core";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

import Slogan from "./Slogan";
// Icons

export default function Logo({ children, minHeight, picture }) {
  return (
    <>
      <Fade in={true} timeout={1800}>
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
