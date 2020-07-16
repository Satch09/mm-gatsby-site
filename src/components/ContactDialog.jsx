import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

export default function ContactDialog({ children, useIcon }) {
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

  const dialogProps = {
    open: open,
    onClose: handleClose,
    minWidth: "md",
    ["aria-lablledby"]: "form-dialog-title",
  };
  const submitButton = {
    onClick: handleSend,
    color: "primary",
    children: "Submit",
  };
  const cancelButton = {
    onClick: handleClose,
    color: "primary",
    children: "Cancel",
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
      name: {
        required: true,
        id: "outlined-required",
        label: "Name",
        name: "name",
        defaultValue: "",
        variant: "outlined",
        onChange: handleChange,
      },
      number: {
        id: "outlined-required",
        name: "contactNumber",
        type: "number",
        label: "Contact Number",
        defaultValue: "",
        variant: "outlined",
        onChange: handleChange,
      },
      message: {
        required: true,
        id: "standard-multiline-static",
        name: "message",
        label: "Message",
        multiline: true,
        rows: 4,
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
  const renderButtons = () => {
    if (useIcon) {
      return (
        <Button>
          <EmailIcon
            {...contactUsButton}
            fontSize="large"
            style={{ color: "white" }}
          />
        </Button>
      );
    }
    return <Button {...contactUsButton} />;
  };

  return (
    <div>
      {renderButtons()}
      <Dialog {...dialogProps}>
        <Grid {...grid.container}>
          <Grid {...grid.item.end}></Grid>
          <Grid {...grid.item.start}>
            <Box p={1}>
              <form {...form.containerProps} className={classes.root}>
                <div>
                  <TextField {...form.textFields.name} />
                  <TextField {...form.textFields.number} />
                  <TextField {...form.textFields.message} />
                </div>
              </form>
            </Box>
          </Grid>
        </Grid>
        <DialogActions>
          <Button {...cancelButton} />
          <Button {...submitButton} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

ContactDialog.propTypes = {};
