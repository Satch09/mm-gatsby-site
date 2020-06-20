import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  ...theme.customProperties,
  heroContainer: {
    repeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundImage: "url(nasa-cover-compressed.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    alignItems: "center",
    minWidth: "100%",
    padding: 0,
    paddingBottom: "70px",
    backgroundImage: "linear-gradient( to bottom, #c43435 5%, #d60000 )",
  },
}));

export default function HeroCover({ children, minHeight, picture }) {
  const classes = useStyles();

  return (
    <>
      <Box
        container
        boxShadow={8}
        minHeight={minHeight || "30vh"}
        component="section"
        className={classes.heroContainer}>
        {children}
      </Box>
    </>
  );
}
