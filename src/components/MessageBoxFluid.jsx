import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";
const styles = makeStyles((theme) => ({
  ...theme.customProperties,
  root: { display: "flex", flexDirection: "column" },
  details: { display: "flex", flexDirection: "column" },
  link: {
    textDecoration: "none",
  },
  overall: {},
  media: {
    // minHeight: 140,
  },
}));

const MessageBox = ({ classes, title, body, noBottomDivider }) => {
  //TODO put link rendering into function

  if (title && body) {
    return (
      <>
        <Container maxWidth="sm">
          <Typography variant="h4" component="div">
            {title.toUpperCase()}
          </Typography>

          <Divider variant="middle" />
          <Box p={1} align="start">
            <Typography variant="body1" color="textSecondary" component="p">
              {body.map((line) => (
                <Box key={line} p={2}>
                  {line}
                </Box>
              ))}
            </Typography>
          </Box>
          {!noBottomDivider && <Divider variant="middle" />}
        </Container>
      </>
    );
  }
  return null;
};

export default withStyles(styles)(MessageBox);
