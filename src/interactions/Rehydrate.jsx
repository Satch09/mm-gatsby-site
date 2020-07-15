import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Spinner from "components/Spinner";

export default function Rehydrate({ children }) {
  /**
   * Gatsby is focused on speed and will render the site with the css
   * but the contents will look strange and render incorrectly.
   * Having a useEffect to check that the page have rendered and is ready to render contents
   * fixes this.
   */
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // if (window.mmSiteFirstLoad) setHasMounted(true);
    // else
    //   setTimeout(() => {
    //     window.mmSiteFirstLoad = true;
    //     setHasMounted(true);
    //   }, 2000);
  }, []);

  if (!hasMounted) {
    return <Spinner />;
  }
  return <>{children}</>;
}

Rehydrate.propTypes = {
  children: PropTypes.any,
};
