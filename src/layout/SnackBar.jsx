import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CovidBanner from "components/CovidBanner";
function Alert(props) {
  return <MuiAlert variant="outlined" {...props} />;
}

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        action={<CovidBanner onClick={handleClose} />}
      />
    </>
  );
}
