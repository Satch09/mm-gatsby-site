import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// Icons

import Header from "components/Header";

import { bookWithPencil } from "svg";

import ContactDialog from "components/ContactDialog";
import ContentLayout from "layout/ContentLayout";
import HeaderSection from "layout/HeaderSection";
import ExternalLink from "./ExternalLink";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ...theme.customProperties,
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    flexGrow: 1,
    backgroundImage: "linear-gradient( to left, #c43435 5%, #d60000 )",
    marginTop: "10px",
    color: "white",
    width: "100%",
    padding: "30px",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Postal() {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Postal</Typography>
        <EmailIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
      <Typography variant="body1">PO Box 7242</Typography>
      <Typography variant="body1">Northern Paarl</Typography>
      <Typography variant="body1">Western Cape</Typography>
      <Typography variant="body1">7623</Typography>
    </>
  );
}
