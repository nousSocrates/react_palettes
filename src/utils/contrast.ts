function luminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function parseColor(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) throw new Error("Unsupported color format");

  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

export function contrastRatio(foreground: string, background: string): number {
  const [r1, g1, b1] = parseColor(foreground);
  const [r2, g2, b2] = parseColor(background);

  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);  

  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export function passesAA(ratio: number) {
  return ratio >= 4.5;
}
