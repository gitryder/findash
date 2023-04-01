const COLORS = {
  purple: {
    dark: "#913691",
    light: "#F8ECF8",
  },
  red: {
    dark: "#C32828",
    light: "#EFDCDC",
    lighter: "#EEAAAA",
  },
  green: {
    dark: "#348E3D",
    light: "#E3F3E4",
    lighter: "#B4E4B9",
  },
  teal: {
    dark: "#36A09A",
    light: "#E7F7F6",
  },
  grey: {
    dark: "#D9D9D9",
    light: "#E3E3E3",
  },
  black: {
    dark: "#404040",
    light: "#333333",
  },
};

type Color = keyof typeof COLORS;

export { COLORS as colors };
export type { Color };
