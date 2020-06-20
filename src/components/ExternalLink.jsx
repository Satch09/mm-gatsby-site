import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MuiLink from "@material-ui/core/Link";
// Icons

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
}));

export default function ExternalLink({ children, ...linkProps }) {
  // const classes = useStyles();

  return (
    <>
      <MuiLink
        color="inherit"
        style={{ textDecoration: "none" }}
        {...linkProps}
        target={linkProps.target || "_blank"}
        rel={linkProps.rel || "noopener"}>
        {children}
      </MuiLink>
    </>
  );
}
