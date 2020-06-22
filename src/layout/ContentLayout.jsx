import PropTypes from "prop-types";
import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import { Container, Box } from "@material-ui/core";
import FadeIn from "interactions/FadeIn";
import SlideIn from "interactions/SlideIn";
import Section from "./Section";

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

export default function ContentLayout({ children }) {
  return (
    <>
      <FadeIn>
        <SlideIn>
          <div>{children}</div>
        </SlideIn>
      </FadeIn>
    </>
  );
}
