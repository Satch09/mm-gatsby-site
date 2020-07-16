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
export default function TopLayout(props) {
  const headerPropsWithOptions = {
    options: { slogan: true },
  };
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="preload"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Rehydrate>
          <Hero>
            <ScrollingNav />
            <Header headerProps={headerPropsWithOptions} />
          </Hero>
          {props.children}
        </Rehydrate>
      </ThemeProvider>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
