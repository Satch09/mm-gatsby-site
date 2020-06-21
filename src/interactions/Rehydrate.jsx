import React, { useEffect, useState } from "react";
import { WaveSpinner } from "react-spinners-kit";
import Spinner from "components/Spinner";

// import { makeStyles } from "@material-ui/core/styles";

export default function Rehydrate({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  // const inputEl = useRef(null);
  useEffect(() => {
    setHasMounted(true);

    return () => {};
  }, []);

  if (!hasMounted) {
    return <Spinner />;
  }
  // const classes = useStyles();
  return <>{children}</>;
}
