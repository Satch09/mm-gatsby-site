import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import LogoImage from "static/images/LogoWebsite.jpg";
import { Fade, Container, Box, Paper } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "./Spinner";

// Icons

export default function Logo() {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "LogoWebsite.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <Container maxWidth="xs">
        <Paper>
          <Box p={1}>
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
