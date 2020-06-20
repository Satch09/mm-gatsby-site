import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Paper, Fade, Container, Box } from "@material-ui/core";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

import Slogan from "./Slogan";
// Icons

// const useStyles = makeStyles((theme) => ({
//   ...theme.customProperties,
//   heroContainer: {
//     // minHeight: "10vh",

//     //repeat: "no-repeat",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-end",
//     backgroundImage: "url(CorpMod1.png)",
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed",
//     backgroundPosition: "bottom",
//     //backgroundSize: "cover",
//     alignItems: "center",
//   },
// }));

export default function Logo({ children, minHeight, picture }) {
  // const classes = useStyles();

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
