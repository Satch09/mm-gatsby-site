import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";

// Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactDialog from "./ContactDialog";
import ExternalLink from "./ExternalLink";
import { Map } from "./Contact";

export default function SocialLinks() {
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
              social {
                faceBook
                linkedIn
              }
            }
          }
        }
      }
    `
  );

  const links = {
    faceBook: {
      href: `${contact.social.faceBook}`,
    },
    linkedIn: {
      href: `${contact.social.linkedIn}`,
    },
  };

  return (
    <>
      <Grid container justify="center" spacing={0} align="end">
        <ExternalLink {...links.faceBook}>
          <Button>
            <FacebookIcon fontSize="large" style={{ color: "white" }} />
          </Button>
        </ExternalLink>
        <ExternalLink {...links.linkedIn}>
          <Button>
            <LinkedInIcon fontSize="large" style={{ color: "white" }} />
          </Button>
        </ExternalLink>

        <ContactDialog useIcon={true} />

        <Map />
      </Grid>
    </>
  );
}
