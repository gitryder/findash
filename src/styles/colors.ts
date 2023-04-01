const COLORS = {
  purple: {
    dark: "#913691",
    light: "#F8ECF8",
  },
  red: {
    dark: "#C32828",
    light: "#EFDCDC",
  },
  green: {
    dark: "#348E3D",
    light: "#E3F3E4",
  },
  teal: {
    dark: "#36A09A",
    light: "#E7F7F6",
  },
  grey: {
    dark: "#D9D9D9",
    light: "#E3E3E3",
  },
};

type Color = keyof typeof COLORS;

export { COLORS as colors };
export type { Color };
