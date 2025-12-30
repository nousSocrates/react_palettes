import { useState } from "react";
import { copyToClipboard } from "../utils/clipboard";
import type { Palette } from "../data/palettes";
import { contrastRatio, passesAA } from "../utils/contrast";
// import { evaluatePalette } from "../utils/evaluatePalette";

type InspectorProps = {
  palette: Palette;
};

export function Inspector({ palette }: InspectorProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const entries = Object.entries(palette.colors);
  // const results = evaluatePalette(palette.colors);

  const checks = [
    {
      label: "Text on Background",
      fg: palette.colors.text,
      bg: palette.colors.background,
    },
    {
      label: "Text on Surface",
      fg: palette.colors.text,
      bg: palette.colors.surface,
    },
    {
      label: "Button Text on Primary",
      fg: "#ffffff",
      bg: palette.colors.primary,
    },
  ];

  return (
    <div className="inspector-panel">
      <div className="inspector-section">
        <h3 className="inspector-subtitle">Color Tokens</h3>
        <ul className="token-list">
          {entries.map(([key, value]) => (
            <li key={key} className="token-row">
              <span className="token-swatch" style={{ background: value }} />

              <div className="token-meta">
                <code className="token-name">{key}</code>
                <small className="token-value">{value}</small>
              </div>

              <button
                className="token-copy"
                onClick={async () => {
                  const success = await copyToClipboard(value);
                  if (success) {
                    setCopiedKey(key);
                    setTimeout(() => setCopiedKey(null), 1200);
                  }
                }}
                aria-label={`Copy ${key}`}
              >
                {copiedKey === key ? "✓" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="inspector-section">
        <h3 className="inspector-subtitle">Contrast (WCAG AA)</h3>

        <ul className="contrast-list">
          {checks.map(({ label, fg, bg }) => {
            const ratio = contrastRatio(fg, bg);
            const pass = passesAA(ratio);

            return (
              <li key={label} className="contrast-row">
                <span>{label}</span>
                <span className={`contrast-badge ${pass ? "pass" : "fail"}`}>
                  {ratio} {pass ? "✓" : "✕"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <section className="inspector-section">
        <h4 className="inspector-subtitle">Accessibility</h4>

        <ul className="contrast-list">
          {results.map((r) => (
            <li key={r.label} className="contrast-row">
              <span>{r.label}</span>

              <span className={`contrast-badge ${r.pass ? "pass" : "fail"}`}>
                {r.pass ? "PASS" : "FAIL"} ({r.ratio.toFixed(2)})
              </span>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}
