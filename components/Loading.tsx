import React from "react";
import { Circle } from "better-react-spinkit";

export default function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="E3CBC28" size={60} />
      </div>
    </center>
  );
}
