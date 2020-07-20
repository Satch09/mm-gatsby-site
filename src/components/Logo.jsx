import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import LogoImage from "static/images/LogoWebsite.jpg";
import { Fade, Container, Box, Paper } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";

// Icons

export default function Logo() {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "LogoWebsite.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <>
      <Container maxWidth="xs">
        <Paper>
          <Box p={1} m={1}>
            <Img
              // onStartLoad={<Spinner />}
              // onLoad={<Spinner />}
              title="logo"
              alt="logo"
              fluid={data.image.childImageSharp.fluid}
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
}
