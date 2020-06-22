import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "components/Hero";
import ScrollingNavbar from "components/ScrollingNav";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { Grid, Container } from "@material-ui/core";
import Logo from "components/Logo";
import Slogan from "./Slogan";
import SocialLinks from "./SocialLinks";

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

export default function Header({ children, minHeight, headerProps }, data) {
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
      <Hero minHeight={minHeight || null}>
        <ScrollingNavbar />
        {/* {console.log(options)} */}

        {options.logo ? null : <Logo />}

        <Slogan />
        <SocialLinks />
        {children}
      </Hero>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.any,

  headerProps: PropTypes.object,
};
