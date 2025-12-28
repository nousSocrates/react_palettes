// src/utils/darkMode.ts
// src/utils/darkMode.ts
import type { BaseColorTokens, ThemeColorTokens } from "../types/colors";
import { adjustColor } from "../utils/colors";

export function generateDarkTokens(
  light: BaseColorTokens
): ThemeColorTokens {
  return {
    ...light,

    primary: adjustColor(light.primary, -10),
    secondary: adjustColor(light.secondary, -10),

    background: "#0f172a",
    surface: "#111827",
    surfaceAlt: "#1f2937",

    text: "#e5e7eb",
    textMuted: "#9ca3af",

    border: "rgba(255,255,255,0.12)",

    textOnSurface: "#e5e7eb",
    textOnSurfaceMuted: "#9ca3af",
  };
}
