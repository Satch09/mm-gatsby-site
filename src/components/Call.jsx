import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// Icons

import PhoneIcon from "@material-ui/icons/Phone";
import Header from "components/Header";

import { bookWithPencil } from "svg";

import ContactDialog from "components/ContactDialog";
import ContentLayout from "layout/ContentLayout";
import HeaderSection from "layout/HeaderSection";
import ExternalLink from "./ExternalLink";
import { Box, Button } from "@material-ui/core";

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

export default function Call() {
  const classes = useStyles();

  return (
    <>
      <Button>
        <a
          href="tel:+27218722218"
          style={{ textDecoration: "none", color: "white" }}>
          <PhoneIcon fontSize="medium" style={{ color: "white" }} />
          <Typography variant="body1">021 8722218</Typography>
          <Typography>Normal | Standby</Typography>
        </a>
      </Button>
      {/* <Typography variant="body1">16 Alkmaar Street</Typography>
      <Typography variant="body1">Paarl</Typography>
      <Typography variant="body1">Western Cape</Typography>
      <Typography variant="body1">7646</Typography> */}
    </>
  );
}
