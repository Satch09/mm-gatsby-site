import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProjectCardTest from "./ProjectCardTest";

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
                date
                tags
                description
                industries
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ProjectCardTest {...data.allMarkdownRemark} />
      </>
    )}
  ></StaticQuery>
);

export default ProjectPost;
