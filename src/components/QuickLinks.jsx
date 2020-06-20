import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CardWithIcon from "components/Cards/CardWithIcon";
import { Box } from "@material-ui/core";
// Icons
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import CodeIcon from "@material-ui/icons/Code";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  ...theme.customProperties,
  linkBox: {
    minWidth: "100px",
    //minHeight: "100px",
    margin: theme.spacing(2),
  },
  icon: {
    fontSize: "4em",
  },
}));

export default function QuickLinks() {
  const classes = useStyles({});

  const gridContainerProps = {
    container: true,
    justify: "center",
  };

  const gridItemProps = {
    xs: 2,
    sm: 3,
    md: 2,
    p: 0,
    m: 0,

    className: classes.linkBox,
  };
  const links = {
    serviceLink: {
      text: "24/7 Service",
      linkTo: "/services",
      Icon: function Icon() {
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            <AccessAlarmIcon className={classes.icon} />
          </Box>
        );
      },
    },
  };

  const contactLink = {
    text: "Remote Support",
    linkTo: "/contact",
    Icon: function Icon() {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CodeIcon className={classes.icon} />
        </Box>
      );
    },
  };
  const projectsLink = {
    text: "Our Projects",
    linkTo: "/projects",
    Icon: function Icon() {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <PlaylistAddCheckIcon className={classes.icon} />
        </Box>
      );
    },
  };
  const trainingLink = {
    text: "Personalised Training",
    linkTo: "/training",
    Icon: function Icon() {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <PeopleIcon className={classes.icon} />
        </Box>
      );
    },
  }; // These props are here because classes can only be instantiated within the component

  return (
    <>
      <Grid {...gridContainerProps}>
        <Grid {...gridItemProps}>
          <CardWithIcon {...links.serviceLink} />
        </Grid>
        <Grid {...gridItemProps}>
          <CardWithIcon {...contactLink} />
        </Grid>
        <Grid {...gridItemProps}>
          <CardWithIcon {...projectsLink} />
        </Grid>
        <Grid {...gridItemProps}>
          <CardWithIcon {...trainingLink} />
        </Grid>
      </Grid>

      {/* <Divider variant="middle" /> */}
    </>
  );
}
