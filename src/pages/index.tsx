import React from "react";
import { Navbar, AtAGlance, NetSavings } from "@components";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.75rem",
          gap: "2.25rem",
        }}
      >
        <NetSavings />
        <AtAGlance />
      </main>
    </React.Fragment>
  );
}
