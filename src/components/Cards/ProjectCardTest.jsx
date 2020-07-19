import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

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

import { Box, Container, CardHeader, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: 250,
  },
});

export default function ProjectCardTest({ edges }) {
  const e = [...edges];

  const classes = useStyles();
  const ItemPost = ({
    node: {
      frontmatter: post,
      fields: { slug },
    },
  }) => {
    return (
      <Card className={classes.root}>
        <Link to={slug} style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <CardHeader title={post.title} subheader={post.date} />
            <CardMedia
              className={classes.media}
              image={require("../../images/drive1.jpg")}
              title={post.title}
            />

            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <CardActions>
            {post.tags
              ? post.tags.map(tag => (
                  <Box variant="button" key={tag}>
                    <Button size="medium" color="primary">
                      #{tag}
                    </Button>
                  </Box>
                ))
              : null}
          </CardActions>
        </div>
      </Card>
    );
  };
  return (
    <>
      {e.map(i => (
        <Grid item xs={12} md={4}>
          {ItemPost(i)}
        </Grid>
      ))}
    </>
  );
}
