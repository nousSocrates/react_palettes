import React, { useState } from "react";

import { palettes } from "./data/palettes";
import type { Palette } from "./data/palettes";
import { PaletteList } from "./components/PaletteList";

import { Inspector } from "./components/Inspector";
import { adjustColor } from "./utils/colors";
import type { ThemeColorTokens } from "./types/colors";

import { PreviewShell } from "./components/preview/PreviewShell";
import { Dashboard } from "./components/preview/Dashboard";
import { Courses } from "./components/preview/Courses";
import { Lesson } from "./components/preview/Lesson";
import { Assessment } from "./components/preview/Assessment";

import { generateDarkTokens } from "./utils/darkMode";
import { useMediaQuery } from "./hooks/useMediaQuery";

type Screen = "dashboard" | "courses" | "lesson" | "assessment";

type ThemeMode = "light" | "dark";

function App() {
  const [activePalette, setActivePalette] = useState<Palette>(palettes[0]);
  const [isInspectorOpen, setInspectorOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [screen, setScreen] = useState<Screen>("dashboard");
  const [mode, setMode] = useState<ThemeMode>("light");

  const baseColors: ThemeColorTokens =
    mode === "light"
      ? {
          ...activePalette.colors,
          textOnSurface: activePalette.colors.text,
          textOnSurfaceMuted: activePalette.colors.textMuted,
        }
      : generateDarkTokens(activePalette.colors);

  const styleVars = {
    "--color-primary": baseColors.primary,
    "--color-secondary": baseColors.secondary,
    "--color-accent": baseColors.accent,

    "--color-background": baseColors.background,
    "--color-surface": baseColors.surface,
    "--color-surface-alt": adjustColor(baseColors.surface, -4),

    "--color-text": baseColors.text,
    "--color-text-muted": baseColors.textMuted,
    "--color-text-on-surface": baseColors.textOnSurface ?? baseColors.text,
    "--color-text-on-surface-muted":
      baseColors.textOnSurfaceMuted ?? baseColors.textMuted,

    "--color-border": baseColors.border,

    "--color-primary-hover": adjustColor(baseColors.primary, -15),
  } as React.CSSProperties;

  return (
    <>
      {/* GRID LAYOUT */}
      <div className="app" style={styleVars}>
        {/* LEFT COLUMN */}
        <aside className="sidebar">
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          <PaletteList
            palettes={palettes}
            activeId={activePalette.id}
            onSelect={setActivePalette}
          />
        </aside>

        {/* CENTER COLUMN */}
        <main className="preview">
          <div className="screen-switcher">
            <PreviewShell screen={screen} onNavigate={setScreen}>
              {/* screen rendering */}
              {screen === "dashboard" && <Dashboard />}
              {screen === "courses" && <Courses />}
              {screen === "lesson" && <Lesson />}
              {screen === "assessment" && <Assessment />}
            </PreviewShell>
          </div>
        </main>

        {/* RIGHT COLUMN (DESKTOP ONLY) */}
        {!isMobile && (
          <aside className="inspector">
            <Inspector palette={activePalette} />
          </aside>
        )}
      </div>

      {/* MOBILE ONLY (OUTSIDE GRID) */}
      {isMobile && (
        <>
          <div className={`inspector-drawer ${isInspectorOpen ? "open" : ""}`}>
            <div className="inspector-drawer__header">
              <span>Inspector</span>
              <button onClick={() => setInspectorOpen(false)}>✕</button>
            </div>

            <div className="inspector-drawer__content">
              <Inspector palette={activePalette} />
            </div>
          </div>

          <button
            className="inspector-toggle"
            onClick={() => setInspectorOpen(true)}
          >
            Inspector
          </button>
         
        </>
      )}
    </>
  );
}

export default App;
