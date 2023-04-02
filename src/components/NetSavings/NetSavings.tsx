import React from "react";
import { ColoredBox, Text, H5 } from "@components";

import { useNetSavings } from "@queries/useNetSavings";

import { getFormattedAmount } from "@helpers/amount";

const NetSavings = () => {
  const { data: savings } = useNetSavings();

  return (
    <ColoredBox direction="column" color="purple">
      <H5 color="purple">Your Net Savings</H5>
      <Text size={4} color="purple">
        {getFormattedAmount(savings)}
      </Text>
    </ColoredBox>
  );
};

export { NetSavings };
