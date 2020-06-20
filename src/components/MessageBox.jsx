import React from "react";

import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const MessageBox = ({ title, body, noBottomDivider }) => {
  //TODO put link rendering into function

  if (title && body) {
    return (
      <>
        <Box p={2}>
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
            <Box align="start" style={{ height: "100%" }}>
              <Typography variant="body1" color="textSecondary" component="p">
                {body.map(line => (
                  <Box key={line} m={1}>
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
  }
  return null;
};

export default MessageBox;
