import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ...theme.customProps,
  footerContainer: {
    dispay: "flex",
    // alignItems: "center",
    // backgroundColor: "black",
  },
  footer: {
    color: "white",

    //backgroundImage: "url(nasa-cover-compressed.jpg)",
    //backgroundRepeat: "no-repeat",
    //backgroundAttachment: "fixed",
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
