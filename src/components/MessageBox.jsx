import PropTypes from "prop-types";
import React from "react";

import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const MessageBox = ({ title, body, noBottomDivider }) => {
  //TODO put link rendering into function

  return (
    <>
      <Typography variant="h4" component="h2">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="1.6rem"
          height="4em"
          paddingX="1em"
        >
          {title.toUpperCase()}
        </Box>
      </Typography>

      <Divider variant="middle" />
      <Box
        paddingX={4}
        paddingY={2}
        display="flex"
        justifyContent="center"
        align="center"
        alignItems="center"
        minHeight="9vh"
      >
        <Typography variant="body1" color="textSecondary" component="p">
          {body.map(line => (
            <Box component="p" key={line}>
              {line}
            </Box>
          ))}
        </Typography>
      </Box>
      {!noBottomDivider && <Divider variant="middle" />}
    </>
  );
};

MessageBox.propTypes = {};

export default MessageBox;
