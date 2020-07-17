import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import HeaderSection from "./HeaderSection";
import { Paper, Container } from "@material-ui/core";
import Rehydrate from "interactions/Rehydrate";
export default function OverhangSpacing({ children, mainItem }) {
  const inputEl = useRef(null);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: inputEl.current.offsetTop,
    });
    inputEl.current.focus();
    return () => {};
  }, []);
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            display: "block",
            width: "100%",
            minWidth: "100%",
            top: "-5vh",
          }}
        >
          <div ref={inputEl}></div>
          <Container>
            <Paper elevation={8}>{mainItem}</Paper>
          </Container>
          <div
            style={{
              position: "relative",
              display: "block",
              width: "100%",
              minWidth: "100%",
            }}
          >
            {children}
          </div>
        </div>
        <HeaderSection></HeaderSection>
      </div>
    </>
  );
}

OverhangSpacing.propTypes = {
  children: PropTypes.object,
  mainItem: PropTypes.object,
};
