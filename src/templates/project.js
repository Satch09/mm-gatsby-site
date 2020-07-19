import React from "react";
import { graphql } from "gatsby";
import HeaderSection from "layout/HeaderSection";
import OverhangSpacing from "layout/OverhangSpacing";
import HeaderPicture from "layout/Header";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import ContentLayout from "interactions/SlideIn";
import MessageBox from "components/MessageBox";
import Section from "layout/Section";

import { Grid, Box, Container, Paper, Typography } from "@material-ui/core";
import PageLayout from "layout/PageLayout";
import Rehydrate from "interactions/Rehydrate";

export default function BlogPost({ data: { post } }) {
  const messageBox = {
    title: post.frontmatter.title,
    body: [post.frontmatter.description],
  };

  const mdElements = post.htmlAst.children.filter(
    child => child.type !== "text"
  );
  const topContent = (
    <>
      <Box display="flex" justifyContent="center">
        <Container maxWidth="lg">
          <Paper elevation={8}>
            <MessageBox {...messageBox} noBottomDivider />
          </Paper>
        </Container>
      </Box>
    </>
  );
  const getElement = element => {
    const variants = { p: "body1", blockquote: "h4" };
    console.log(variants[element]);
    if (variants[element] !== undefined) {
      return variants[element];
    } else return element;
  };
  const mainContent = (
    <>
      <Paper>
        <Box p={3} m={2}>
          <Typography variant="body2">{post.frontmatter.date}</Typography>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Typography>
        </Box>
      </Paper>
      {/* <Paper>
        {mdElements.map(element => (
          <Box m={1}>
            <Typography variant={getElement(element.tagName)}>
              {element.children.map(child => child.value)}
            </Typography>
          </Box>
        ))}
      </Paper> */}
    </>
  );
  return (
    <>
      <PageLayout topContent={topContent} mainContent={mainContent} />
    </>
  );
}
export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
        description
      }
    }
  }
`;
