import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProjectCardTest from "./ProjectCardTest";
import { Grid } from "@material-ui/core";

const ProjectPost = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "Do MMM YYYY")
                tags
                description
                industries
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Grid container justify="start" xs={12} spacing={2}>
          <ProjectCardTest {...data.allMarkdownRemark} />
        </Grid>
      </>
    )}
  ></StaticQuery>
);

export default ProjectPost;
