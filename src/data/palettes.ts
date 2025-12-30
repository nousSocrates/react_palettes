import type { BaseColorTokens } from "../types/colors";

export type Palette = {
  id: string;
  name: string;
  description?: string;
  colors: BaseColorTokens;
};

export const palettes: Palette[] = [
  {
    id: "1",
    name: "Socrates Schools",
    description: "Classic academic palette with philosophical depth.",
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

  {
    id: "2",
    name: "Modern EdTech",
    description: "Clean, modern palette for SaaS learning platforms.",
    colors: {
      primary: "#2563EB",
      secondary: "#22C55E",
      accent: "#38BDF8",

      background: "#F8FAFC",
      surface: "#FFFFFF",

      text: "#0F172A",
      textMuted: "rgba(15,23,42,0.6)",

      border: "rgba(15,23,42,0.12)",
    },
  },

  {
    id: "3",
    name: "Humanities Warm",
    description: "Warm and inviting theme for arts & humanities schools.",
    colors: {
      primary: "#7C2D12",
      secondary: "#C2410C",
      accent: "#FDBA74",

      background: "#FFF7ED",
      surface: "#FFFFFF",

      text: "#3F2A1D",
      textMuted: "rgba(63,42,29,0.6)",

      border: "rgba(63,42,29,0.15)",
    },
  },

  {
    id: "4",
    name: "Corporate Training",
    description: "Neutral, professional palette for enterprise LMS.",
    colors: {
      primary: "#111827",
      secondary: "#4B5563",
      accent: "#9CA3AF",

      background: "#F9FAFB",
      surface: "#FFFFFF",

      text: "#111827",
      textMuted: "rgba(17,24,39,0.6)",

      border: "rgba(17,24,39,0.15)",
    },
  },

  {
    id: "5",
    name: "Youth STEM",
    description: "Energetic but controlled palette for STEM education.",
    colors: {
      primary: "#7C3AED",
      secondary: "#06B6D4",
      accent: "#FACC15",

      background: "#F8FAFC",
      surface: "#FFFFFF",

      text: "#1E1B4B",
      textMuted: "rgba(30,27,75,0.6)",

      border: "rgba(30,27,75,0.15)",
    },
  },
];
