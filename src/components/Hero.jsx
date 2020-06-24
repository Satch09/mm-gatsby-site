import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { CardMedia } from "@material-ui/core";
import coverImage from "static/images/nasa-cover-cropped-compressed.jpeg";
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
    // backgroundSize: "cover",
    minWidth: "100%",
    height: "100%",
    padding: 0,
    paddingBottom: "70px",
  },
  image: {
    repeat: "no-repeat",
    zIndex: -1,
    backgroundPosition: "bottom",
    [theme.breakpoints.up("lg")]: { backgroundAttachment: "fixed" },
  },
}));

export default function Hero({ children, minHeight }) {
  const classes = useStyles();

  return (
    <>
      {/* <Img
        objectFit="cover"
        fluid={data.placeholderImage.childImageSharp.fluid}
      /> */}
      <CardMedia image={coverImage} className={classes.image}>
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

Hero.propTypes = {
  children: PropTypes.any,
  minHeight: PropTypes.string,
};
