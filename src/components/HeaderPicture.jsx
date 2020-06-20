import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeroCoverPicture from "components/HeroCoverPicture";
import ScrollingNavbar from "components/ScrollingNav";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { Grid, Container } from "@material-ui/core";
import Logo from "components/Logo";
import Slogan from "./Slogan";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  heroContainer: {
    // display: "block",
    // minHeight: "100vh",
    // width: "100%",
    // repeat: "no-repeat",
    // //backgroundColor: "coral",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-end",
    // backgroundImage: "url(nasa-cover-compressed.jpg)",
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    // backgroundPosition: "bottom",
    // backgroundSize: "cover",
    // alignItems: "center",
    //padding: 0,
    // margin: 0,
  },
  slogan: {
    fontSize: "3rem",
    minHeight: 120,
  },
}));

export default function HeaderPicture(
  { children, minHeight, picture, headerProps, cover },
  data
) {
  const classes = useStyles();

  const { options = {} } = headerProps;

  // const HeaderProps = (headerProps) => {
  //   return (
  //     <Helmet>
  //       <title>{title}</title>
  //       <meta name={name} />
  //       <meta content={description} />
  //     </Helmet>
  //   );
  // };

  return (
    <>
      <HeroCoverPicture minHeight={minHeight || null}>
        <ScrollingNavbar />
        {/* {console.log(options)} */}

        {options.logo ? null : <Logo />}

        <Slogan />
        {children}
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
      </HeroCoverPicture>
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/nasa-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
