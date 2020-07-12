import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

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

const useStyles = makeStyles({
  root: {
    maxWidth: "md",
    maxHeight: "md",
  },
  media: {
    height: 140,
  },
});

export default function ProjectCardTest({ edges }) {
  const e = [...edges];

  const renderPosts = (Component, posts) => <Component>{posts}</Component>;

  const classes = useStyles();
  const ItemPost = ({ node: { frontmatter } }) => {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {frontmatter.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {frontmatter.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  return (
    <>
      {e.map(i => ItemPost(i))}
      {/* <ItemPost /> */}
    </>
  );
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
