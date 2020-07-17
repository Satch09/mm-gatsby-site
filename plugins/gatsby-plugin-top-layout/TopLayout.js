import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "util/theme";
import "./baseline.css";
import Rehydrate from "interactions/Rehydrate";
import Logo from "components/Logo";
import Header from "layout/Header";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import Hero from "components/Hero";
import ScrollingNav from "components/Navbar/ScrollingNav";
import Section from "layout/Section";
import CovidBanner from "components/CovidBanner";
export default function TopLayout(props) {
  const headerPropsWithOptions = {
    options: { slogan: true },
  };
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <CssBaseline />
      <Rehydrate>
        <ThemeProvider theme={theme}>
          <Hero>
            <ScrollingNav />
            <Header headerProps={headerPropsWithOptions} />
          </Hero>

          {props.children}
          {/* <div style={{ position: "fixed", bottom: "10px" }}>
            <CovidBanner />
          </div> */}
        </ThemeProvider>
      </Rehydrate>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
