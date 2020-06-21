import React from "react";
import Typography from "@material-ui/core/Typography";

// Icons

import PhoneIcon from "@material-ui/icons/Phone";

import { Box, Button } from "@material-ui/core";

export default function CallTest() {
  return (
    <>
      <Button>
        <a
          href="tel:+27218722218"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex">
            <Box marginRight={1}>
              <PhoneIcon fontSize="small" style={{ color: "white" }} />
            </Box>
            <Box>
              <Typography variant="body1">+27 21 872 2218</Typography>
            </Box>
          </Box>
        </a>
      </Button>
    </>
  );
}
