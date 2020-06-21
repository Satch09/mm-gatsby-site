import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useStaticQuery, graphql } from "gatsby";
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
    // backgroundSize: "cover",
    minWidth: "100%",
    height: "100%",
    padding: 0,
    paddingBottom: "70px",
  },
}));

export default function HeroCoverPicture({ children, minHeight, picture }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nasa-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      <CardMedia
        image={coverImage}
        style={{
          repeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          backgroundPositionY: "-200px",
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
