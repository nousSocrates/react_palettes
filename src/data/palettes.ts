export type Palette = {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
};

export const palettes: Palette[] = [
  {
    id: "socrates-academy",
    name: "Socrates Academy",
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
