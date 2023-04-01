import React from "react";
import { colors } from "../../styles/colors";

import type { Color } from "../../styles/colors";

const commonTextStyles = (color: Color): React.CSSProperties => ({
  fontFamily: "Nunito",
  fontWeight: "extrabold",
  ...(typeof color === "string"
    ? {
        color: colors?.[color]?.dark ?? color,
      }
    : {}),
});

interface TextProps {
  size: 1.25 | 1.75 | 2 | 2.5 | 3 | 4;
  color: Color | string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const H5 = ({ color, children }: Pick<TextProps, "color" | "children">) => {
  return (
    <h5
      style={{
        fontSize: "2rem",
        ...commonTextStyles(color as Color),
      }}
    >
      {children}
    </h5>
  );
};

const Label = ({ color, children }: Pick<TextProps, "color" | "children">) => {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textTransform: "capitalize",
        letterSpacing: "10%",
        ...commonTextStyles(color as Color),
      }}
    >
      {children}
    </p>
  );
};

const Text = ({ size, color, children, style }: TextProps) => {
  return (
    <p
      style={{
        fontSize: `${size}rem`,
        ...commonTextStyles(color as Color),
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export { Text, H5, Label };
