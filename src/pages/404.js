import React, { useEffect, useState } from "react";
import MessageBox from "components/MessageBox";

import HeaderPicture from "components/HeaderPicture";
import HeaderSection from "layout/HeaderSection";
import ContentLayout from "layout/ContentLayout";

import page from "data/notFound.json";
import Spinner from "components/Spinner";
export default function PageNotFound() {
  const [hasMounted, setHasMounted] = useState(false);

  // const inputEl = useRef(null);
  useEffect(() => {
    setHasMounted(true);

    // window.scrollTo({
    //   behavior: "smooth",
    //   top: inputEl.current.offsetTop,
    // });
    // inputEl.current.focus();
    return () => {};
  }, []);

  if (!hasMounted) {
    return <Spinner />;
  }
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
