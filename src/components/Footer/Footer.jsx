import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  footerContainer: {
    dispay: "flex",
  },
  footer: {
    color: "white",
  },
}));

export default function Footer({ children }) {
  const classes = useStyles();
  return (
    <>
      <Box component="footer">
        <Grid container className={classes.footerContainer}>
          {children}
        </Grid>
      </Box>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="body2" component="p">
          | MJS Electronics PTY(Ltd) &copy; {new Date().getFullYear()} |
        </Typography>
      </Container>
    </>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};
