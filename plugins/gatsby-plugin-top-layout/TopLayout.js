import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "util/theme";
import "./baseline.css";
import Rehydrate from "util/Rehydrate";
import Header from "layout/Header";
import Hero from "components/Hero";
import ScrollingNav from "components/Navbar/ScrollingNav";
import CustomizedSnackbars from "layout/SnackBar";
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
          <CustomizedSnackbars />
        </ThemeProvider>
      </Rehydrate>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
