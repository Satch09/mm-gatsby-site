import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import WatchLaterIcon from "@material-ui/icons/WatchLater";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Box } from "@material-ui/core";
// Icons

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

export default function OperationHoursAfter() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Standby Hours</Typography>
        <WatchLaterIcon fontSize="medium" />
      </Box>
      <Typography variant="body1">Mon - Sun: 24/7/365</Typography>
    </>
  );
}
