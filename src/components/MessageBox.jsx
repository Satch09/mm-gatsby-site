import PropTypes from "prop-types";
import React from "react";

import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const MessageBox = ({ title, body, noBottomDivider }) => {
  //TODO put link rendering into function

  return (
    <>
      <Box paddingY={1} margin={1}>
        <Container>
          <Typography variant="h4" component="p">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="1.6rem"
              height="5em"
            >
              {title.toUpperCase()}
            </Box>
          </Typography>

          <Divider variant="middle" />
          <Box
            marginY={2}
            display="flex"
            align="center"
            style={{ height: "100%" }}
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
        </Container>
      </Box>
    </>
  );
};

MessageBox.propTypes = {};

export default MessageBox;
