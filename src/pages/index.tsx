import React from "react";
import { Navbar, AtAGlance, NetSavings, CashFlow } from "@components";

const Home = () => {
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

        {/* // TODO: News component */}

        <CashFlow />
      </main>
    </React.Fragment>
  );
};

export default Home;
