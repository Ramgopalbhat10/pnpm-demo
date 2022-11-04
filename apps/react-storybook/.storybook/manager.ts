import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",

  // Base Color
  colorSecondary: "#1ea7fd",

  // UI
  // appBg: "#F6F9FC",
  // appContentBg: "#FFFFFF",
  // appBorderColor: "rgba(0,0,0,.1)",
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text Colors
  textColor: "#FFFFFF",
  textInverseColor: "#333333",
  textMutedColor: "#666666",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#1ea7fd",
  // barBg: "#FFFFFF",

  // Form Colors
  // inputBg: "#FFFFFF",
  // inputBorder: "rgba(0,0,0,.3)",
  // inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: "MRGB",
  brandUrl: "https://mrgb.in/",
  brandImage: "https://mrgb.in/favicon-32x32.png",
});

addons.setConfig({
  theme,
});
