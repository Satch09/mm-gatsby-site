import React from "react";
import Fade from "@material-ui/core/Fade";

export default function FadeIn({ children }) {
  return (
    <>
      <Fade in={true} timeout={550}>
        {children}
      </Fade>
    </>
  );
}
