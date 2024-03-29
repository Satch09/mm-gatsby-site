import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Box } from "@material-ui/core";

// Icons
// const useStyles = makeStyles((theme) => ({
//   banner: {
//     backgroundColor: "rgba(0,0,0,0.8)",
//   },
// }));

export default function AffiliatesBanner() {
  // const classes = useStyles();

  return (
    <>
      <Grid
        container
        marginY={4}
        justify="space-around"
        align="center"
        xs={12}
        m={3}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          p={3}
          boxShadow={6}
          style={{ backgroundColor: "white" }}
        >
          <Grid container justify="center">
            <Grid item>
              <img alt="logo" src={require("../images/logo1.png")} />
              <img alt="logo" src={require("../images/logo2.png")} />
            </Grid>
            <Grid item>
              <img alt="logo" src={require("../images/logo3.png")} />
              <img alt="logo" src={require("../images/g10.jpg")} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
