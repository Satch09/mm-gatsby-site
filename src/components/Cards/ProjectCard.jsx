import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import { Box } from "@material-ui/core";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.down("md")]: { flexDirection: "column" },
  },
  details: {
    display: "flex",
    flexGrow: 2,
  },
  content: {},
  cover: {
    maxWidth: "300px",
    minWidth: "300px",
  },
}));

export default function ProjectCard({ title, body }) {
  const classes = useStyles();
  if (title && body) {
    return (
      <>
        <Card className={classes.root}>
          <CardContent m={2} className={classes.content}>
            <Box m={2} p={2}>
              <Typography component="h5" variant="h5">
                {title}
              </Typography>
            </Box>
            <Box m={1} p={0}>
              <Box display="flex">
                <div>
                  <Box>
                    <Typography>Technologies</Typography>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItemText
                        primary="Control Logix"
                        secondary="17 Slot rack with ethernet"
                      />

                      <ListItemText
                        primary="Powerflex 7000"
                        secondary="1 MW drive"
                      />
                    </List>
                  </Box>
                  <Box>
                    <Typography>Results</Typography>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItemText
                        primary="Increase production"
                        secondary="25% increase in production"
                      />

                      <ListItemText
                        primary="Remote support"
                        secondary="Remote administration abilities"
                      />
                    </List>
                  </Box>
                </div>
              </Box>
              <Typography>Description</Typography>
              <Divider />
              <Typography variant="subtitle1" color="textSecondary">
                {body}
              </Typography>
            </Box>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={require("../../images/drive1.jpg")}
            title="Drive"
          ></CardMedia>
        </Card>
      </>
    );
  }
}
/* <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Box m={2} p={2}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box m={1} p={0}>
            <Typography variant="subtitle1" color="textSecondary">
              {body}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={require("../../images/drive1.jpg")}
          title="Drive"
        ></CardMedia>
      </Card> */
