import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Paper, Grid, Typography, Container, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ServicesList(service) {
  const classes = useStyles();

  return (
    <>
      <Box p={1}>
        <Typography variant="h4">{service.heading}</Typography>
        <Box m={1}>
          <Divider />
        </Box>
        <Box p={1}>
          <Paper elevation={2}>
            <List
              style={{ minHeight: "600px" }}
              component="div"
              aria-label="services lists"
            >
              {service.items.map(topic => (
                <ListItem key={topic.title}>
                  <ListItemText
                    primary={topic.title}
                    secondary={topic.detail || null}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
