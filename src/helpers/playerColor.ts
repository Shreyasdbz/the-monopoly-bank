/** @format */

import { color_palette } from "../style/playerColors";

export function getRandomColorID(): number {
  return color_palette[Math.floor(Math.random() * color_palette.length)].id;
}

export function getPlayerColor(id: number): string | void {
  for (let color of color_palette) {
    if (color.id === id) {
      return color.color;
    }
  }
}
