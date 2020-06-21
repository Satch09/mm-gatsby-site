import React from "react";

import Fade from "@material-ui/core/Fade";

export default function FadeIn({ children, fadeProps }) {
  return (
    <>
      <Fade {...fadeProps} in={true} timeout={600}>
        {children}
      </Fade>
    </>
  );
}
