import React, { useState } from "react";
import { palettes } from "./data/palettes";
import type { Palette } from "./data/palettes";
import { PaletteList } from "./components/PaletteList";

function App() {
  const [activePalette, setActivePalette] = useState<Palette>(palettes[0]);

  const styleVars = {
    "--color-primary": activePalette.colors.primary,
    "--color-secondary": activePalette.colors.secondary,
    "--color-accent": activePalette.colors.accent,
    "--color-background": activePalette.colors.background,
    "--color-surface": activePalette.colors.surface,
    "--color-text": activePalette.colors.text,
    "--color-text-muted": activePalette.colors.textMuted,
    "--color-border": activePalette.colors.border,
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

      <main className="preview">
        <h1>Socrates Schools</h1>
      </main>

      <aside className="inspector">Inspector</aside>
    </div>
  );
}

export default App;
