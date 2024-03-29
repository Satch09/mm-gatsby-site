import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";

// Icons

import PhoneIcon from "@material-ui/icons/Phone";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import DescriptionIcon from "@material-ui/icons/Description";

import EmailIcon from "@material-ui/icons/Email";
import { Box, Button } from "@material-ui/core";
import ExternalLink from "./ExternalLink";

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
              email {
                info
              }
              address {
                link
              }
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
          <Box marginRight={1} display="flex" alignItems="center">
            <PhoneIcon fontSize="medium" style={{ color: "white" }} />
          </Box>

          <Typography variant="body1">{contact.tel}</Typography>
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
          <Box marginRight={1} display="flex" alignItems="center">
            <PhoneIcon fontSize="small" style={{ color: "white" }} />
          </Box>

          <Typography variant="body1">{contact.tel}</Typography>
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
            <Box marginRight={1} display="flex" alignItems="center">
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
        <Box display="flex" alignItems="center">
          <Box marginRight={1} display="flex">
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

export function Map({ variant }) {
  const contact = Contact();
  const large = () => (
    <>
      <ExternalLink {...{ href: contact.address.link }}>
        <Button>
          <LocationOnIcon fontSize="large" style={{ color: "white" }} />
        </Button>
      </ExternalLink>
    </>
  );
  const small = () => null;

  return <>{variant === "small" ? small() : large()}</>;
}

export function Email({ variant }) {
  const contact = Contact();

  const large = () => (
    <>
      <Button>
        <a
          href={`mailto:${contact.email.info}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex" alignItems="center">
            <Box marginRight={1} display="flex">
              <EmailIcon fontSize="large" style={{ color: "white" }} />
            </Box>

            <Typography variant="body1">{contact.email.info}</Typography>
          </Box>
        </a>
      </Button>
    </>
  );
  const small = () => (
    <>
      <Button>
        <a
          href={`mailto:${contact.email.info}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Box display="flex" alignItems="center">
            <Box marginRight={1} display="flex">
              <EmailIcon fontSize="small" style={{ color: "white" }} />
            </Box>

            <Typography variant="body1">{contact.email.info}</Typography>
          </Box>
        </a>
      </Button>
    </>
  );
  return <>{variant === "small" ? small() : large()}</>;
}

export function TrainingTracker({ variant }) {
  const large = () => (
    <>
      <ExternalLink {...{ href: "https://mmelectronics.netlify.app" }}>
        <Button variant="outlined">Certification Tracker</Button>
      </ExternalLink>
    </>
  );
  const small = () => null;

  return <>{variant === "small" ? small() : large()}</>;
}
