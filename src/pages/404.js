import React from "react";
import MessageBox from "components/MessageBox";

import HeaderPicture from "components/HeaderPicture";
import HeaderSection from "layout/HeaderSection";
import ContentLayout from "layout/ContentLayout";

import page from "data/notFound.json";
import Rehydrate from "interactions/Rehydrate";
export default function PageNotFound() {
  // const inputEl = useRef(null);

  return (
    <>
      <Rehydrate>
        <HeaderPicture headerProps={page.headerProps} />

        <HeaderSection>
          <MessageBox {...page.heading} />
        </HeaderSection>
        <ContentLayout></ContentLayout>
      </Rehydrate>
    </>
  );
}
