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

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.date}</h3>
      <h2>{post.frontmatter.description}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <Footer>
        <ContactOperatingHours />
      </Footer>
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
