import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  li: { listStyleImage: "none" },
}));

export default function ExpansionPanelTraining({ objectives, requirements }) {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Learning Objectives
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {objectives.map(obj => {
              return (
                <ListItem key={obj}>
                  <ListItemText
                    secondary={obj}
                    //secondary="Secondary text"
                  />
                </ListItem>
              );
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Course Requirements
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {requirements.map(obj => {
              return (
                <ListItem key={obj}>
                  <ListItemText
                    secondary={obj}
                    //secondary="Secondary text"
                  />
                </ListItem>
              );
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ExpansionPanelTraining.propTypes = {
  objectives: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
  requirements: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
};
