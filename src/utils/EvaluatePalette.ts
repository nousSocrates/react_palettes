import { contrastRatio, passesAA } from "./contrast";
import type { ThemeColorTokens } from "../types/colors";

export type ContrastResult = {
  label: string;
  ratio: number;
  pass: boolean;
};

export function evaluatePalette(colors: ThemeColorTokens): ContrastResult[] {
  const textOnBg = contrastRatio(colors.text, colors.background);
  const textOnSurface = contrastRatio(
    colors.textOnSurface ?? colors.text,
    colors.surface
  );

  return [
    {
      label: "Text on Background",
      ratio: textOnBg,
      pass: passesAA(textOnBg),
    },
    {
      label: "Text on Surface",
      ratio: textOnSurface,
      pass: passesAA(textOnSurface),
    },
  ];
}
