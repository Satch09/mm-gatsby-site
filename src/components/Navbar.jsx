import React from "react";
import { Link as Route, StaticQuery } from "gatsby";
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
import SocialLinks from "./SocialLinks";
import CallTest from "./CallTest";
import FaxTest from "./FaxTest";

const useStyles = makeStyles(theme => ({
  ...theme.customProperties,
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "flex-end",
    alignItems: "middle",
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

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isSmallDisplay = useMediaQuery("(min-width:750px)");
  const classes = useStyles();
  return (
    //TODO refactor this lot
    <StaticQuery
      query={graphql`
        query TitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <CallTest />
          <div className={classes.root}>
            {isSmallDisplay ? (
              <Box p={0}>
                {data.site.siteMetadata.menuLinks.map(item => {
                  return (
                    <Route key={item.name} to={item.link}>
                      <Link
                        component="button"
                        variant="body2"
                        color="primary"
                        // onClick={() => {
                        //   // console.info("I'm a button.");
                        // }}
                      >
                        <Button className={classes.navButton}>
                          {item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)}
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
                  onClick={handleClick}
                >
                  <MenuIcon style={{ color: "white" }} />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  PaperProps={{
                    style: { backgroundColor: "#050000" },
                  }}
                >
                  {data.site.siteMetadata.menuLinks.map(item => {
                    return (
                      <Route key={item.name} to={item.link}>
                        <Link component="li" className={classes.navButton}>
                          <MenuItem>
                            <Button className={classes.navButton}>
                              {item.name.charAt(0).toUpperCase() +
                                item.name.slice(1)}
                            </Button>
                          </MenuItem>
                        </Link>
                      </Route>
                    );
                  })}
                </Menu>
              </div>
            )}
          </div>
        </>
      )}
    />
  );
}
