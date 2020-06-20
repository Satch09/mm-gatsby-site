import React from "react";
import { Link as Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  ...theme.customProperties,
  root: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
  navButton: {
    color: "white",
    textDecoration: "none",
  },
}));

const navButtons = [
  "home",
  "about",
  "services",
  "training",
  "projects",
  "contact",
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {matches ? (
        <Box>
          {navButtons.map((item) => {
            return (
              <Route key={item} to={item}>
                <Link
                  component="button"
                  variant="body2"
                  color="primary"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}>
                  <Button className={classes.navButton}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Button>
                </Link>
              </Route>
            );
          })}
        </Box>
      ) : (
        <div className="">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            <MenuIcon style={{ color: "white" }} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Button>
        </div>
      )}
    </div>
  );
}
