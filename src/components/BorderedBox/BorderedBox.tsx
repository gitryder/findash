import React from "react";
import { colors } from "../../styles/colors";

const BorderedBox = ({
  gap,
  children,
  style,
}: {
  gap?: React.CSSProperties["gap"];
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: `${gap}rem`,
        padding: "1rem",
        border: `3px solid ${colors.grey.dark}`,
        borderRadius: "8px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { BorderedBox };
