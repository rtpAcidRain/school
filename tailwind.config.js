/** @type {import('tailwindcss').Config} */
const scaleMedia =
  "(min-width: 640) and (max-aspect-ratio: 13 / 9) and (max-height: 499px), (min-width: 640) and (max-aspect-ratio: 13 / 9) and (max-width: 1440px), (min-width: 640) and (min-height: 416px) and (max-height: 499px), (min-width: 640) and (min-height: 416px) and (max-width: 1440px), (min-width: 640px) and (max-height: 499px), (min-width: 640px) and (max-width: 1440px)";
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    screens: {
      scaleMedia: {
        raw: `${scaleMedia}`,
      },
      lg: "1024px",
      sm: {
        raw: `${scaleMedia}, (min-width: 1440px)`,
      },
      smMax: { max: "640px" },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "60sb": [
        "3.75rem",
        {
          lineHeight: "1em",
          letterSpacing: "-0.04em",
          fontWeight: "600",
        },
      ],
      "56sb": [
        "3.5rem",
        {
          lineHeight: "1.107142857142857em",
          letterSpacing: "-0.04em",
          fontWeight: "600",
        },
      ],
      "48m": [
        "3rem",
        {
          lineHeight: "1.208333333333333em",
          letterSpacing: "-0.02em",
          fontWeight: "500",
        },
      ],
      "40sb": [
        "2.5rem",
        {
          lineHeight: "1.1em",
          letterSpacing: "-0.03em",
          fontWeight: "600",
        },
      ],
      "32sb": [
        "2rem",
        {
          lineHeight: "1.09375em",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
      "27sb": [
        "1.6875rem",
        {
          lineHeight: "1.111111111111111em",
          letterSpacing: "-0.04em",
          fontWeight: "600",
        },
      ],
      "24sb": [
        "1.5rem",
        {
          lineHeight: "1.333333333333333em",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        },
      ],
      "24m": [
        "1.5rem",
        {
          lineHeight: "1em",
          letterSpacing: "-0.04em",
          fontWeight: "500",
        },
      ],
      20: [
        "1.25rem",
        {
          lineHeight: "1.45em",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      "20m": [
        "1.25rem",
        {
          lineHeight: "1.45em",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "20sb": [
        "1.25rem",
        {
          lineHeight: "1.15em",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        },
      ],
      "17sb": [
        "1.0625rem",
        {
          lineHeight: "1.411764705882353em",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
      "17m": [
        "1.0625rem",
        {
          lineHeight: "1.411764705882353em",
          letterSpacing: "-0.02em",
          fontWeight: "500",
        },
      ],
      17: [
        "1.0625rem",
        {
          lineHeight: "1.411764705882353em",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      "15m": [
        "0.9375rem",
        {
          lineHeight: "1.333333333333333em",
          letterSpacing: "-0.02em",
          fontWeight: "500",
        },
      ],
      "15b": [
        "0.9375rem",
        {
          lineHeight: "1.333333333333333em",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      14: [
        "0.875rem",
        {
          letterSpacing: "normal",
          lineHeight: "1.357142857142857em",
          fontWeight: "400",
        },
      ],
      "13m": [
        "0.8125rem",
        {
          lineHeight: "1.230769230769231em",
          fontWeight: "500",
          letterSpacing: "0.01em",
        },
      ],
      13: [
        "0.8125rem",
        {
          lineHeight: "1.384615384615385em",
          letterSpacing: "0.01em",
          fontWeight: "400",
        },
      ],
      12: [
        "0.75rem",
        {
          letterSpacing: "normal",
          lineHeight: "1.333333333333333em",
          fontWeight: "400",
        },
      ],
      "11eb": [
        "0.6875rem",
        {
          lineHeight: "1.363636363636364em",
          letterSpacing: "0.01em",
          fontWeight: "800",
        },
      ],
      "10sb": [
        "0.625rem",
        {
          lineHeight: "1.2em",
          letterSpacing: "0.01em",
          fontWeight: "600",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      w10: "#FFFFFF",

      be: {
        10: "#061143",
        9: "#051A75",
        8: "#0631AE",
        7: "#0749DC",
        6: "#0072F0",
        5: "#418BFE",
        4: "#6EA6FF",
        3: "#97C1FF",
        2: "#C8DEFF",
        1: "#ECF4FF",
      },

      g: {
        10: "#081C09",
        9: "#033311",
        8: "#06481B",
        7: "#0F642A",
        6: "#1A8039",
        5: "#23A149",
        4: "#3EBC62",
        3: "#57D679",
        2: "#9DEEB3",
        1: "#D9FBE3",
      },

      o: {
        10: "#433007",
        9: "#5D4101",
        8: "#7E5308",
        7: "#A06900",
        6: "#BD8805",
        5: "#E3A407",
        4: "#FAC319",
        3: "#FFE3AB",
        2: "#FFEDCB",
        1: "#FFF7E9",
      },

      r: {
        10: "#2E050A",
        9: "#4C0810",
        8: "#740B18",
        7: "#A61123",
        6: "#E71730",
        5: "#ED5663",
        4: "#F17B85",
        3: "#F6A7AE",
        2: "#FAD1D4",
        1: "#FEECEE",
      },

      bk: {
        10: "#161616",
        9: "#2D2D2D",
        8: "#454545",
        7: "#5C5C5C",
        6: "#737373",
        5: "#8B8B8B",
        4: "#A2A2A2",
        3: "#B9B9B9",
        2: "#E6E6E6",
        1: "#F2F2F2",
      },

      dc: {
        1: "#DFE9FF",
        2: "#B5DAFC",
        3: "#F4F7FF",
        l: "#E5FFD9",
        y: "#FFECD9",
        v: "#EAD9FF",
        p: "#FFD9D9",
      },

      mb: "rgba(0, 0, 0, 0.40);",
    },
    extend: {
      gap: {
        cols: "1.125rem",
      },
      backgroundImage: {
        lg: "linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%)",
      },
      borderRadius: {
        extrasmall: "0.75rem",
        small: "1.5rem",
        big: "1.6875em",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
