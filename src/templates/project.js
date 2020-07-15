import React from "react";
import { graphql } from "gatsby";
import Rehydrate from "interactions/Rehydrate";
import HeaderSection from "layout/HeaderSection";
import OverhangSpacing from "layout/OverhangSpacing";
import HeaderPicture from "layout/Header";
import Footer from "layout/Footer";
import ContactOperatingHours from "components/ContactOperatingHours";
import ContentLayout from "interactions/SlideIn";
import MessageBox from "components/MessageBox";
import Section from "layout/Section";

import { Grid } from "@material-ui/core";

export default function BlogPost({ data }) {
  console.log(data);
  const post = data.markdownRemark;

  return (
    <>
      <Grid container justify="center" xs={12} spacing={2}>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <h2>{post.frontmatter.description}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* {page.projects.map(project => {
                  return (
                    <Grid item xs={12} md={10} key={project.title}>
                      <ProjectCard {...project} />
                    </Grid>
                  );
                })} */}
      </Grid>
    </>
  );
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
