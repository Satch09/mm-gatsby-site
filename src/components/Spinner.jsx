import React from "react";

import { PulseSpinner } from "react-spinners-kit";

export default function Spinner() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <PulseSpinner size={60} color="#686769" />
      </div>
    </>
  );
}
