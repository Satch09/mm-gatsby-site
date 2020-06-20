import React from "react";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
// Icons

import { Box } from "@material-ui/core";

export default function Postal() {
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
