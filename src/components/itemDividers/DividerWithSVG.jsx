import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, Paper, SvgIcon } from "@material-ui/core";
import "./index.css";
const styles = makeStyles((theme) => ({
  root: { display: "flex", flexDirection: "column" },
  overall: {},
  media: {
    // minHeight: 140,
  },
}));

const DividerWithSVG = ({ classes }) => {
  return <div className="svg"></div>;
};

export default withStyles(styles)(DividerWithSVG);
