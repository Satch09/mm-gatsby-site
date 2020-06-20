import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import Slide from "@material-ui/core/Slide";

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
      <Slide appear={true} timeout={500} direction="up" in={true}>
        {children}
      </Slide>
    </>
  );
}
