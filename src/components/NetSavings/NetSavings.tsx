import React from "react";
import { ColoredBox, Text, H5 } from "@components";

const NetSavings = () => {
  return (
    <ColoredBox direction="column" color="purple">
      <H5 color="purple">Your Net Savings</H5>
      <Text size={4} color="purple">
        ₹21,983.89
      </Text>
    </ColoredBox>
  );
};

export { NetSavings };
