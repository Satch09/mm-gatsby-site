import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper, Typography, Container } from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import EmailIcon from "@material-ui/icons/Email";
export default function EmailSignUp({ children, useIcon }) {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState({});
  const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        // minWidth: "100%",
      },
    },
  }));

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    if (details.name && details.message) {
      const body = `
      Name: ${details.name}
      Enquiry: ${details.message}
      Contact Number: ${details.contactNumber || "no contact number provided"}`;

      window.location.href =
        "mailto:info@mandmelec.co.za?subject=Training Enquiry&body=" + body;
      handleClose();
    }
  };
  const classes = useStyles();

  const submitButton = {
    onClick: handleSend,
    color: "primary",
    children: "Submit",
  };

  const contactUsButton = {
    size: "medium",
    color: "primary",
    onClick: handleClickOpen,
    children: "Contact Us",
  };

  const form = {
    containerProps: {
      noValidate: true,
      autoComplete: "off",
    },
    textFields: {
      email: {
        id: "outlined-required",
        label: "Email",
        name: "email",
        defaultValue: "",
        variant: "outlined",
        onChange: handleChange,
      },
    },
  };

  const grid = {
    container: {
      container: true,
      justify: "center",
      spacing: 0,
    },
    item: {
      start: {
        item: true,
        xs: 12,
        align: "start",
      },
      end: {
        item: true,
        xs: 12,
        align: "end",
      },
    },
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        p={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5">
          Sign up for news and special offers
        </Typography>
        <form {...form.containerProps} className={classes.root}>
          <div>
            <TextField {...form.textFields.email} />
          </div>
        </form>
      </Box>
    </Container>
  );
}
