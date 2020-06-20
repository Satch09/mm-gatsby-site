import React from "react";
import Typography from "@material-ui/core/Typography";

// Icons

import PhoneIcon from "@material-ui/icons/Phone";

import { Box, Button } from "@material-ui/core";

export default function CallTest() {
  return (
    <>
      <Button>
        <PhoneIcon fontSize="medium" style={{ color: "white" }} />
        <Box display="flex" m={2}>
          <a
            href="tel:+27218722218"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="body1">021 8722218</Typography>
          </a>
        </Box>
      </Button>
      {/* <Typography variant="body1">16 Alkmaar Street</Typography>
      <Typography variant="body1">Paarl</Typography>
      <Typography variant="body1">Western Cape</Typography>
      <Typography variant="body1">7646</Typography> */}
    </>
  );
}
