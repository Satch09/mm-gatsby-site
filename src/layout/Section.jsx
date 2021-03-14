import PropTypes from "prop-types";
import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import { Container, Box } from "@material-ui/core";
import FadeIn from "interactions/FadeIn";

export default function Section({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <FadeIn>
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
        </FadeIn>
      </Container>
    </>
  );
}
