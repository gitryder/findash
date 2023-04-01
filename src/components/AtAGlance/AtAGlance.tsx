import React from "react";
import { colors } from "@styles/colors";
import { ColoredBox, Text, H5 } from "@components";

const AtAGlance = () => {
  return (
    <div style={{ display: "flex", gap: "2.25rem" }}>
      <DetailItem type="outbound" />
      <DetailItem type="inbound" />
    </div>
  );
};

const DetailItem = ({ type }: { type: "inbound" | "outbound" }) => {
  const color = type === "outbound" ? "red" : "green";

  return (
    <ColoredBox direction="column" color={color}>
      <H5 color={color}>This month</H5>
      <Text size={4} color={color}>
        + ₹19,473.45
      </Text>
      <Text size={4} color={color}>
        ----------------------
      </Text>
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
        }}
      >
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_277)">
            <path
              d="M18.5 3C10.22 3 3.5 9.72 3.5 18C3.5 26.28 10.22 33 18.5 33C26.78 33 33.5 26.28 33.5 18C33.5 9.72 26.78 3 18.5 3ZM20 25.5H17V16.5H20V25.5ZM20 13.5H17V10.5H20V13.5Z"
              fill={type === "outbound" ? colors.red.dark : colors.green.dark}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_277">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <Text size={2} color={color}>
          Try reducing your spends on food & other leisure items to save more
        </Text>
      </div>
    </ColoredBox>
  );
};

export { AtAGlance };
