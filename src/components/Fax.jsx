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
          <DescriptionIcon fontSize="medium" style={{ color: "white" }} />
          <Typography variant="body1">021 8724805</Typography>
          <Typography>Normal | Standby</Typography>
        </a>
      </Button>
    </>
  );
}
