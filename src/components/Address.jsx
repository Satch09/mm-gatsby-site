import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useStaticQuery, graphql } from "gatsby";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import EmailIcon from "@material-ui/icons/Email";
// Icons

import { Box } from "@material-ui/core";

function Address() {
  const {
    site: {
      siteMetadata: {
        contact: { address },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contact {
              address {
                street {
                  number
                  name
                  city
                  province
                  code
                }
                postal {
                  number
                  name
                  city
                  province
                  code
                }
              }
            }
          }
        }
      }
    `
  );
  return address;
}

export function StreetAddress() {
  const address = Address();
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Head Office</Typography>
        <GpsFixedIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
      <Typography variant="body1">
        {address.street.number} {address.street.name}
      </Typography>
      <Typography variant="body1">{address.street.city}</Typography>
      <Typography variant="body1">{address.street.provice}</Typography>
      <Typography variant="body1">{address.street.code}</Typography>
    </>
  );
}
export function PostalAddress() {
  const address = Address();
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Postal</Typography>
        <EmailIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
      <Typography variant="body1">
        {address.postal.number} {address.postal.name}
      </Typography>
      <Typography variant="body1">{address.postal.city}</Typography>
      <Typography variant="body1">{address.postal.provice}</Typography>
      <Typography variant="body1">{address.postal.code}</Typography>
    </>
  );
}
