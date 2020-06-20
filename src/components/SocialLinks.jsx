import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";

// Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactDialog from "./ContactDialog";
import ExternalLink from "./ExternalLink";

const useStyles = makeStyles(theme => ({
  links: {
    // backgroundImage: "linear-gradient( to right,  grey , black 50%, grey  )",
    // backgroundColor: "black",
  },
}));

export default function SocialLinks({ metaProps }) {
  const classes = useStyles();

  const links = {
    faceBook: {
      href: "https://www.facebook.com/MM-electronics-112297240473303",
    },
    linkedIn: {
      textDecoration: "none",
      href: "https://www.linkedin.com/company/mandmelectronics",
    },
    location: {
      textDecoration: "none",
      href:
        "https://www.google.com/maps/place/M+and+M+Electronics/@-33.7119894,18.9746,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcd07f2f679697d:0x7a86ea7263601aeb!8m2!3d-33.7119894!4d18.976794",
    },
  };

  return (
    <>
      <Grid
        container
        justify="center"
        spacing={0}
        align="end"
        className={classes.links}
      >
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

        <ExternalLink {...links.location}>
          <Button>
            <LocationOnIcon fontSize="large" style={{ color: "white" }} />
          </Button>
        </ExternalLink>
      </Grid>
    </>
  );
}
