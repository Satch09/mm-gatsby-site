import React from "react";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { Box, Container } from "@material-ui/core";
// Icons

export function OperatingHoursNormal() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Normal Hours</Typography>
        <AccessTimeIcon fontSize="medium" />
      </Box>
      <Typography variant="body1">Mon - Thurs: 08:00-17:00</Typography>
      <Typography variant="body1">Fri: 08:00-15:00</Typography>
      <Typography variant="body1">
        Weekends and public holidays: closed
      </Typography>
    </>
  );
}
export function OperatingHoursAfter() {
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
