import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

const CardWithIcon = ({ classes, text, children, linkTo, Icon }) => {
  return (
    <>
      <Link to={linkTo} style={{ textDecoration: "inherit", color: "inherit" }}>
        <Container>
          <Icon />

          <Typography variant="body1" component="a">
            {text}
          </Typography>
        </Container>
      </Link>
    </>
  );
};

export default CardWithIcon;
