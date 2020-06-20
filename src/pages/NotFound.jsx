import React from "react";
import MessageBox from "components/MessageBox";

import HeaderPicture from "components/HeaderPicture";
import HeaderSection from "layout/HeaderSection";
import ContentLayout from "layout/ContentLayout";

export default function NotFound({ page }) {
  return (
    <>
      <HeaderPicture headerProps={page.headerProps} />

      <HeaderSection>
        <MessageBox {...page.heading} />
      </HeaderSection>
      <ContentLayout></ContentLayout>
    </>
  );
}
