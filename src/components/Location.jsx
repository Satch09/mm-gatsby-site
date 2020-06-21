import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// Icons

import { Box } from "@material-ui/core";

export default function Location() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Head Office</Typography>
        <GpsFixedIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
      <Typography variant="body1">16 Alkmaar Street</Typography>
      <Typography variant="body1">Paarl</Typography>
      <Typography variant="body1">Western Cape</Typography>
      <Typography variant="body1">7646</Typography>
    </>
  );
}
