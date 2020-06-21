import React from "react";
import Typography from "@material-ui/core/Typography";

// Icons

import DescriptionIcon from "@material-ui/icons/Description";

import { Box, Button } from "@material-ui/core";

export default function Fax() {
  return (
    <>
      <Button>
        <a
          href="tel:+27218724805"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex">
            <Box marginRight={1}>
              <DescriptionIcon fontSize="medium" style={{ color: "white" }} />
            </Box>
            <Box>
              <Typography variant="body1">+27 21 872 4805</Typography>
            </Box>
          </Box>
          <Typography>fax</Typography>
        </a>
      </Button>
    </>
  );
}
