import React from "react";
import Typography from "@material-ui/core/Typography";

// Icons

import DescriptionIcon from "@material-ui/icons/Description";

import { Box, Button } from "@material-ui/core";

export default function FaxTest() {
  return (
    <>
      <Button>
        <DescriptionIcon fontSize="medium" style={{ color: "white" }} />
        <Box display="flex" m={2}>
          <a
            href="tel:+27218724805"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="body1">021 8724805</Typography>
          </a>
        </Box>
      </Button>
    </>
  );
}
