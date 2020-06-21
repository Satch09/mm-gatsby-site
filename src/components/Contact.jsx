import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";

// Icons

import PhoneIcon from "@material-ui/icons/Phone";

import DescriptionIcon from "@material-ui/icons/Description";

import { Box, Button } from "@material-ui/core";

function Contact() {
  const {
    site: {
      siteMetadata: { contact },
    },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            contact {
              tel
              fax
            }
          }
        }
      }
    `
  );
  return contact;
}

export function Call({ variant }) {
  const contact = Contact();
  const large = () => (
    <Button>
      <a
        href={`tel:${contact.tel}`}
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
  );
  const small = () => (
    <Button>
      <a
        href={`tel:${contact.tel}`}
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
  );
  return <>{variant === "small" ? small() : large()}</>;
}

export function Fax({ variant }) {
  const contact = Contact();
  const large = () => (
    <>
      <Button>
        <a
          href={`tel:${contact.fax}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex">
            <Box marginRight={1}>
              <DescriptionIcon fontSize="medium" style={{ color: "white" }} />
            </Box>
            <Box>
              <Typography variant="body1">{contact.fax}</Typography>
            </Box>
          </Box>
          <Typography>fax</Typography>
        </a>
      </Button>
    </>
  );
  const small = () => (
    <Button>
      <a
        href={`tel:${contact.fax}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box display="flex">
          <Box marginRight={1}>
            <DescriptionIcon fontSize="small" style={{ color: "white" }} />
          </Box>
          <Box>
            <Typography variant="body1">{contact.fax}</Typography>
          </Box>
        </Box>
      </a>
    </Button>
  );

  return <>{variant === "small" ? small() : large()}</>;
}
