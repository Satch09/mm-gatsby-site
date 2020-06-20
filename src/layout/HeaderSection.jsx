import React from "react";
import { Container } from "@material-ui/core";
import FadeIn from "interactions/FadeIn";

export default function HeaderSection({ children }) {
  return (
    <>
      <FadeIn>
        <Container>
          {children}
        </Container>
      </FadeIn>
    </>
  );
}
