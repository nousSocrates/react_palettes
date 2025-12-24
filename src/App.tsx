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

type Screen = "dashboard" | "courses" | "lesson";

function App() {
  const [activePalette, setActivePalette] = useState<Palette>(palettes[0]);
  const [isInspectorOpen, setInspectorOpen] = React.useState(false);
  const [screen, setScreen] = useState<Screen>("dashboard");

  const styleVars = {
    // Base tokens
    "--color-primary": activePalette.colors.primary,
    "--color-secondary": activePalette.colors.secondary,

    "--color-accent": activePalette.colors.accent,
    "--color-background": activePalette.colors.background,
    "--color-surface": activePalette.colors.surface,
    "--color-text": activePalette.colors.text,

    // Derived tokens
    "--color-primary-hover": adjustColor(activePalette.colors.primary, -20),
    "--color-secondary-hover": adjustColor(activePalette.colors.secondary, -20),

    "--color-text-muted": withOpacity(activePalette.colors.text, 0.6),
    "--color-border": withOpacity(activePalette.colors.text, 0.15),
    "--color-surface-alt": withOpacity(activePalette.colors.text, 0.03),
  } as React.CSSProperties;

  return (
    <div className="app" style={styleVars}>
      <aside className="sidebar">
        <PaletteList
          palettes={palettes}
          activeId={activePalette.id}
          onSelect={setActivePalette}
        />
      </aside>
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

      <main className="preview">
        <PreviewShell screen={screen} onNavigate={setScreen}>
          {screen === "dashboard" && <Dashboard />}
          {screen === "courses" && <Courses />}
          {screen === "lesson" && <Lesson />}
        </PreviewShell>
      </main>

      {/* Desktop Inspector */}
      <aside className="inspector desktop-only">
        <Inspector palette={activePalette} />
      </aside>

      {/* Mobile Inspector Drawer */}
      <div className={`inspector-drawer ${isInspectorOpen ? "open" : ""}`}>
        <div className="inspector-drawer__header">
          <span>Inspector</span>
          <button
            onClick={() => setInspectorOpen(false)}
            aria-label="Close inspector"
          >
            ✕
          </button>
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
