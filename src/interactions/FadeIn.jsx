import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import Fade from "@material-ui/core/Fade";

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

export default function FadeIn({ children, fadeProps }) {
  return (
    <>
      <Fade {...fadeProps} in={true} timeout={600}>
        {children}
      </Fade>
    </>
  );
}
