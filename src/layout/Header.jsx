import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "components/Hero";
import ScrollingNavbar from "components/Navbar/ScrollingNav";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { Grid, Container, Paper, Box } from "@material-ui/core";
import Logo from "components/Logo";
import Slogan from "../components/Slogan";
import SocialLinks from "../components/SocialLinks";
import CovidBanner from "components/CovidBanner";

export default function Header({ children, minHeight, headerProps }, data) {
  const { options = {} } = headerProps;
  return (
    <>
      <Container>
        {options && options.logo ? null : <Logo />}
        <Slogan />
        <SocialLinks />
        {children}
      </Container>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.any,

  headerProps: PropTypes.object,
};
