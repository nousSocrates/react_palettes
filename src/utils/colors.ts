// Darken or lighten a hex color by percentage
export function adjustColor(hex: string, percent: number) {
  const num = parseInt(hex.replace("#", ""), 16);

  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + percent));

  return `rgb(${r}, ${g}, ${b})`;
}

// Apply opacity to rgb/hex safely
export function withOpacity(color: string, opacity: number) {
  if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  }

  const hex = color.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
