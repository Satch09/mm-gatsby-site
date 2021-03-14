import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardWithIcon from "components/Cards/CardWithIcon";
import { Box } from "@material-ui/core";
// Icons
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import CodeIcon from "@material-ui/icons/Code";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles(theme => ({
  ...theme.customProperties,
  linkBox: {
    minWidth: "100px",
    margin: theme.spacing(2),
  },
  icon: {
    fontSize: "3em",
  },
  linkContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
      overflow: "scroll",
      justifyContent: "start",
    },
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
    service: {
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
    contact: {
      text: "Remote Support",
      linkTo: "/contact",
      Icon: function Icon() {
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CodeIcon className={classes.icon} />
          </Box>
        );
      },
    },
    projects: {
      text: "Our Projects",
      linkTo: "/projects",
      Icon: function Icon() {
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            <PlaylistAddCheckIcon className={classes.icon} />
          </Box>
        );
      },
    },
    training: {
      text: "Professional Training",
      linkTo: "/training",
      Icon: function Icon() {
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            <PeopleIcon className={classes.icon} />
          </Box>
        );
      },
    },
  };

  // These props are here because classes can only be instantiated within the component

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        paddingY={4}
        justifyContent="center"
        className={classes.linkContainer}
      >
        <CardWithIcon {...links.service} />
        <CardWithIcon {...links.contact} />
        <CardWithIcon {...links.projects} />
        <CardWithIcon {...links.training} />
      </Box>
    </>
  );
}
