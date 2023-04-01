import React from "react";
import { Text } from "@components";
import { colors } from "@styles/colors";

const Navbar = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "1.75rem",
          borderBottom: `1px solid ${colors?.grey?.dark}`,
        }}
      >
        <Text size={2.5} color="black">
          💸 FinDash
        </Text>
      </nav>
    </header>
  );
};

export { Navbar };
