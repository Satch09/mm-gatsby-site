import PropTypes from "prop-types";
import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import { Container, Box } from "@material-ui/core";
import FadeIn from "interactions/FadeIn";
import SlideIn from "interactions/SlideIn";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function Section({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100%"
          paddingX={1}
          paddingY={6}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
