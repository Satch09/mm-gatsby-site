import React from "react";
import { Link as Route, StaticQuery, graphql } from "gatsby";
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
import { Call } from "../Contact";
import { Email } from "../Contact";

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
  menuButton: {},
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
          <Box p={0}>
            <Call variant="small" />
            <Email variant="small" />
          </Box>

          <div className={classes.root}>
            {isSmallDisplay ? (
              <Box p={0} display="flex" flexWrap="no-wrap">
                {data.site.siteMetadata.menuLinks.map(item => {
                  return (
                    <Route key={item.name} to={item.link} component="button">
                      <Link component="button" variant="body1" color="primary">
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
              </Box>
            ) : (
              <>
                <Box>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MenuIcon style={{ color: "white" }} />
                  </Button>
                </Box>
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
                            <Button
                              variant="body1"
                              onClick={handleClose}
                              className={classes.navButton}
                            >
                              {item.name.charAt(0).toUpperCase() +
                                item.name.slice(1)}
                            </Button>
                          </MenuItem>
                        </Link>
                      </Route>
                    );
                  })}
                </Menu>
              </>
            )}
          </div>
        </>
      )}
    />
  );
}
