import React from "react";
import { colors } from "../../styles/colors";

import type { Color } from "../../styles/colors";

const commonTextStyles = (color: Color): React.CSSProperties => ({
  fontFamily: "Nunito",
  fontWeight: "extrabold",
  ...(typeof color === "string"
    ? {
        color: colors?.[color]?.dark,
      }
    : {}),
});

interface TextProps {
  size: 1.25 | 1.75 | 2 | 3 | 4;
  color: Color;
  children: React.ReactNode;
}

const H5 = ({ color, children }: Pick<TextProps, "color" | "children">) => {
  return (
    <h5
      style={{
        fontSize: "2rem",
        ...commonTextStyles(color),
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
        ...commonTextStyles(color),
      }}
    >
      {children}
    </p>
  );
};

const Text = ({ size, color, children }: TextProps) => {
  return (
    <p
      style={{
        fontSize: `${size}rem`,
        ...commonTextStyles(color),
      }}
    >
      {children}
    </p>
  );
};

export { Text, H5, Label };
