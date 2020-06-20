import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

const CardWithIcon = ({ classes, text, children, linkTo, Icon }) => {
  return (
    <>
      <Container minWidth="xs">
        <Link to={linkTo} style={{ textDecoration: "none", color: "inherit" }}>
          <Box>{Icon}</Box>
          <Box
            textAlign="center"
            display="flex"
            justify="center"
            style={{
              maxWidth: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" component="h5">
              {text}
            </Typography>
          </Box>
          {/* <Box textAlign="center">
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Box> */}
        </Link>
      </Container>
    </>
  );
};

export default CardWithIcon;
