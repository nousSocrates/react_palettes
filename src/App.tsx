import React, { useState } from "react";
import { palettes } from "./data/palettes";
import type { Palette } from "./data/palettes";
import { PaletteList } from "./components/PaletteList";
import { Inspector } from "./components/Inspector";
import { adjustColor, withOpacity } from "./utils/colors";
import { PreviewShell } from "./components/preview/PreviewShell";
import { Dashboard } from "./components/preview/Dashboard";
import { Courses } from "./components/preview/Courses";
import { Lesson } from "./components/preview/Lesson";
import { generateDarkTokens } from "./utils/darkMode";

type Screen = "dashboard" | "courses" | "lesson";
type ThemeMode = "light" | "dark";

function App() {
  const [activePalette, setActivePalette] = useState<Palette>(palettes[0]);
  const [isInspectorOpen, setInspectorOpen] = React.useState(false);
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [mode, setMode] = useState<ThemeMode>("light");
  const baseColors =
    mode === "light"
      ? activePalette.colors
      : generateDarkTokens(activePalette.colors);

  const styleVars = {
    "--color-primary": baseColors.primary,
    "--color-secondary": baseColors.secondary,
    "--color-accent": baseColors.accent,

    "--color-background": baseColors.background,
    "--color-surface": baseColors.surface,
    "--color-surface-alt": baseColors.surfaceAlt,

    "--color-text": baseColors.text,
    "--color-text-muted": baseColors.textMuted,
    "--color-border": baseColors.border,

    "--color-primary-hover": adjustColor(baseColors.primary, -15),
  } as React.CSSProperties;

  return (
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
          <button
            onClick={() => setScreen("dashboard")}
            className={screen === "dashboard" ? "active" : ""}
          >
            Dashboard
          </button>
          <button
            onClick={() => setScreen("courses")}
            className={screen === "courses" ? "active" : ""}
          >
            Courses
          </button>
          <button
            onClick={() => setScreen("lesson")}
            className={screen === "lesson" ? "active" : ""}
          >
            Lesson
          </button>
        </div>

        <PreviewShell screen={screen} onNavigate={setScreen}>
          {screen === "dashboard" && <Dashboard />}
          {screen === "courses" && <Courses />}
          {screen === "lesson" && <Lesson />}
        </PreviewShell>
      </main>

      {/* RIGHT COLUMN (DESKTOP ONLY) */}
      <aside className="inspector desktop-only">
        <Inspector palette={activePalette} />
      </aside>

      {/* MOBILE ONLY (OUTSIDE GRID FLOW) */}
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
        className="inspector-toggle mobile-only"
        onClick={() => setInspectorOpen(true)}
      >
        Inspector
      </button>
    </div>
  );
}

export default App;
