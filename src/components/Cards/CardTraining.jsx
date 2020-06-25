import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelTraining from "components/Cards/ExpansionPanelTraining";
import ContactDialog from "components/ContactDialog";

const useStyles = makeStyles(theme => ({
  ...theme.customProps,
  card: {},
  title: { minHeight: 80 },
  description: {
    minHeight: 60,
  },
}));

export default function CardTraining({
  name,
  description,
  objectives,
  requirements,
}) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} elevation={2}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${name} image`}
            height="190"
            image={require("../../images/drive2.jpg")}
            title={`${name} image`}
          />
          <CardContent style={{ minHeight: "13rem" }}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              className={classes.description}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ContactDialog />
        </CardActions>
        {objectives && requirements ? (
          <ExpansionPanelTraining
            objectives={objectives}
            requirements={requirements}
          />
        ) : null}
      </Card>
    </>
  );
}
