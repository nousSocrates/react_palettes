import { adjustColor, withOpacity } from "./colors";

type BaseColors = Record<string, string>;

export function generateDarkTokens(light: BaseColors): BaseColors {
  return {
    primary: adjustColor(light.primary, -10),
    secondary: adjustColor(light.secondary, -10),
    accent: light.accent,

    background: "#0f172a", // near-slate
    surface: "#111827", // elevated surface
    surfaceAlt: withOpacity("#ffffff", 0.04),

    text: "#e5e7eb",
    textMuted: withOpacity("#e5e7eb", 0.6),

    border: withOpacity("#ffffff", 0.12),
  };
}
