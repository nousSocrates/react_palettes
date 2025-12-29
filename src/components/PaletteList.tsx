import type { Palette } from "../data/palettes";

type PaletteListProps = {
  palettes: Palette[];
  activeId: string;
  onSelect: (palette: Palette) => void;
};

export function PaletteList({
  palettes,
  activeId,
  onSelect,
}: PaletteListProps) {
  return (
    <div className="palette-list">
      <h2 className="palette-list__title">Palettes</h2>

      <ul className="palette-list__items">
        {palettes.map((palette) => {
          const isActive = palette.id === activeId;

          return (
            <li
              key={palette.id}
              className={`palette-card ${isActive ? "is-active" : ""}`}
              onClick={() => onSelect(palette)}
            >
              <div className="palette-card__swatches">
                <span style={{ background: palette.colors.primary }} />
                <span style={{ background: palette.colors.secondary }} />
                <span style={{ background: palette.colors.background }} />
                <span style={{ background: palette.colors.text }} />
              </div>

              <div className="palette-card__meta">
                <small>{palette.id}. &nbsp;</small>
                <strong>{palette.name}</strong>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
