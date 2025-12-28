// src/types/colors.ts

export interface BaseColorTokens {
  primary: string;
  secondary: string;
  accent: string;

  background: string;
  surface: string;

  text: string;
  textMuted: string;

  border: string;
}

export interface ThemeColorTokens extends BaseColorTokens {
  surfaceAlt?: string;

  textOnSurface?: string;
  textOnSurfaceMuted?: string;

  textOnPrimary?: string;
  textOnSecondary?: string;
}
