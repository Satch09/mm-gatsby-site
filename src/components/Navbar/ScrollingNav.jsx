import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ScrollingNav(props) {
  const [state, setState] = useState({ transparent: true, scrollPosition: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.pageYOffset ||
        (document &&
          document.documentElement &&
          document.documentElement.scrollTop);
      setState({
        ...state,
        transparent:
          position > (props.colorTransitionScrollHeight || 50) ? false : true,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.colorTransitionScrollHeight, state]);

  return (
    <>
      <Box m={2}>
        <HideOnScroll {...props}>
          <AppBar
            style={{
              backgroundImage: "#000000af",
              backgroundColor: state.transparent ? "transparent" : "#0000005b",
              boxShadow: "none",
              transition: "background 1s",
            }}
          >
            <Toolbar>
              <Navbar />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </Box>
    </>
  );
}

ScrollingNav.propTypes = {
  colorTransitionScrollHeight: PropTypes.number,
};
