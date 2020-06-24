import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { Box } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  details: {
    display: "flex",
    flexGrow: 2,
  },
  content: {
    display: "flex",
    flexGrow: 2,
    // maxWidth: 500,
  },
  cover: {
    // minWidth: "300px",
  },
  controls: {
    display: "flex",

    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CardWithSideImage({ title, body }) {
  const classes = useStyles();
  if (title && body) {
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Box m={2} p={2}>
              <Typography component="h5" variant="h5">
                {title}
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box m={1} p={0}>
              <Typography variant="subtitle1" color="textSecondary">
                {body}
              </Typography>
            </Box>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={require("../../images/drive1.jpg")}
          title="Drive"
        ></CardMedia>
      </Card>
    );
  }
}
