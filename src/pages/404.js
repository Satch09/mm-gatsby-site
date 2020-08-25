import React from "react";
import MessageBox from "components/MessageBox";

import HeaderPicture from "layout/Header";
import HeaderSection from "layout/HeaderSection";
import ContentLayout from "layout/ContentLayout";

import page from "data/notFound.json";
import SEO from "components/seo";
export default function PageNotFound() {
  // const inputEl = useRef(null);

  return (
    <>
      <SEO title="Not found" />
      <HeaderPicture headerProps={page.headerProps} />

      <HeaderSection>
        <MessageBox {...page.heading} />
      </HeaderSection>
      <ContentLayout></ContentLayout>
    </>
  );
}
