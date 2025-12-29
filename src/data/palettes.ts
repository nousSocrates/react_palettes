// src/data/palettes.ts
import type { BaseColorTokens } from "../types/colors";

export type Palette = {
  id: string;
  name: string;
  colors: BaseColorTokens;
};

export const palettes: Palette[] = [
  {
    id: "1",
    name: "Socrates Schools",
    colors: {
      primary: "#1F3556",
      secondary: "#B79A5A",
      accent: "#E6C87A",
      background: "#F2F2F2",
      surface: "#FFFFFF",
      text: "#2B2B2B",
      textMuted: "rgba(43,43,43,0.6)",
      border: "rgba(43,43,43,0.15)",
    },
  },
];
