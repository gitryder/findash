import React from "react";
import { colors } from "../../styles/colors";

import type { Color } from "../../styles/colors";

const ColoredBox = ({
  color,
  direction,
  gap,
  children,
  style,
}: {
  color: Color;
  direction: React.CSSProperties["flexDirection"];
  gap: React.CSSProperties["gap"];
  children: React.ReactNode;
  style: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: direction,
        gap: `${gap}rem`,
        backgroundColor: colors?.[color]?.light,
        color: colors?.[color]?.dark,
        borderRadius: "8px",
        boxShadow: `0px 4px 0px 0px ${colors?.[color]?.dark}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { ColoredBox };
