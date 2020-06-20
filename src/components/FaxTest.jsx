import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// Icons

import PhoneIcon from "@material-ui/icons/Phone";
import Header from "components/Header";

import DescriptionIcon from "@material-ui/icons/Description";
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

export default function FaxTest() {
  const classes = useStyles();

  return (
    <>
      <Button>
        <DescriptionIcon fontSize="medium" style={{ color: "white" }} />
        <Box display="flex" m={2}>
          <a
            href="tel:+27218724805"
            style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body1">021 8724805</Typography>
          </a>
        </Box>
      </Button>
    </>
  );
}
