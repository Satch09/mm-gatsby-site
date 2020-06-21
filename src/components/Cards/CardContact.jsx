import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  ...theme.customProperties,

  details: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

export default function CardContact({
  name,
  department,
  title,
  number,
  email,
  ext,
}) {
  const classes = useStyles();

  return (
    <Box m={1}>
      <Card>
        <div className={classes.details}>
          <Grid container xs={12}>
            <CardContent justify="center">
              <Typography component="h5" variant="h5">
                {title}
              </Typography>
              <Typography component="h5" variant="h6">
                {name}
              </Typography>
              <Typography component="h6" variant="body1">
                {number}
              </Typography>
              <Typography component="body1" variant="body1">
                {email}
              </Typography>
            </CardContent>
          </Grid>
        </div>
      </Card>
    </Box>
  );
}

CardContact.propTypes = {
  department: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  ext: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
