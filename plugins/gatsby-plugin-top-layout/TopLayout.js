import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "util/theme";
import "./baseline.css";
import SEO from "components/seo";
import Rehydrate from "interactions/Rehydrate";
export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Rehydrate>{props.children}</Rehydrate>
      </ThemeProvider>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
