import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import HeaderSection from "./HeaderSection";
import { Paper } from "@material-ui/core";
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
          <HeaderSection>
            <div ref={inputEl}></div>
            <Paper elevation={8}>{mainItem}</Paper>
          </HeaderSection>
          {children}
        </div>
      </div>
    </>
  );
}

OverhangSpacing.propTypes = {
  children: PropTypes.object,
  mainItem: PropTypes.object,
};
