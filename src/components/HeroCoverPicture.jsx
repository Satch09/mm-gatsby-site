import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { CardMedia } from "@material-ui/core";
import coverImage from "static/nasa-cover-compressed.jpg";
const useStyles = makeStyles(theme => ({
  ...theme.customProperties,
  heroContainer: {
    repeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundImage: "url(nasa-cover-compressed.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    minWidth: "100%",
    height: "100%",
    padding: 0,
    paddingBottom: "70px",
  },
}));

export default function HeroCoverPicture({ children, minHeight, picture }) {
  const classes = useStyles();

  return (
    <>
      <CardMedia
        image={coverImage}
        style={{
          repeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          boxShadow={8}
          minHeight={minHeight || "30vh"}
          component="section"
          className={classes.heroContainer}
        >
          {children}
        </Box>
      </CardMedia>
    </>
  );
}
