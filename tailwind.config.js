import { breakpoints } from "./src/lib/theme/breakpoints";
import { colors } from "./src/lib/theme/color";
import { spacing } from "./src/lib/theme/spacing";
import { typography } from "./src/lib/theme/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: typography,
      colors: colors,
      spacing: spacing,
      breakpoints: breakpoints,
    },
  },
  plugins: [],
};
