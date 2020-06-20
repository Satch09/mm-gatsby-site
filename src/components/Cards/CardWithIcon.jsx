import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
const styles = makeStyles(theme => ({
  root: {
    margin: "0 10%",
  },
  title: {
    fontSize: "100px",
  },
}));

const CardWithIcon = ({ classes, text, children, linkTo, Icon }) => {
  return (
    <>
      <Container minWidth="xs">
        <Link to={linkTo} style={{ textDecoration: "none", color: "inherit" }}>
          <Box>{Icon}</Box>
          <Box
            textAlign="center"
            display="flex"
            justify="center"
            style={{
              maxWidth: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              className={classes.title}
              variant="body1"
              component="h5"
            >
              {text}
            </Typography>
          </Box>
          {/* <Box textAlign="center">
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Box> */}
        </Link>
      </Container>
    </>
  );
};

export default withStyles(styles)(CardWithIcon);
