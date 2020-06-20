import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Box, Container } from "@material-ui/core";
// Icons

const useStyles = makeStyles((theme) => ({
  ...theme.customProperties,
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    flexGrow: 1,
    backgroundImage: "linear-gradient( to left, #c43435 5%, #d60000 )",
    marginTop: "10px",
    color: "white",
    width: "100%",
    padding: "30px",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function OperationHours() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Normal Hours</Typography>
        <AccessTimeIcon fontSize="medium" />
      </Box>
      <Typography variant="body1">Mon - Thurs: 08:00-17:00</Typography>
      <Typography variant="body1">Fri: 08:00-15:00</Typography>
      <Typography variant="body1">
        Weekends and public holidays: closed
      </Typography>
    </>
  );
}
