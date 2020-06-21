import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";

// Icons

import PhoneIcon from "@material-ui/icons/Phone";

import { Box, Button } from "@material-ui/core";

export default function Call() {
  const {
    site: {
      siteMetadata: { contact },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contact {
              tel
            }
          }
        }
      }
    `
  );
  return (
    <>
      <Button>
        <a
          href={contact.tel}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex">
            <Box marginRight={1}>
              <PhoneIcon fontSize="medium" style={{ color: "white" }} />
            </Box>
            <Box>
              <Typography variant="body1">{contact.tel}</Typography>
            </Box>
          </Box>
          <Typography>Normal | Standby</Typography>
        </a>
      </Button>
    </>
  );
}
