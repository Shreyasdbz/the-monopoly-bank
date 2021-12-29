/** @format */

type ColorType = {
  id: number;
  name: string;
  color: string;
};

export const color_palette: ColorType[] = [
  {
    id: 1,
    name: "navy-blue",
    color: "#002848",
  },
  {
    id: 2,
    name: "sky-blue",
    color: "#0094df",
  },
  {
    id: 3,
    name: "flat-purple",
    color: "#310972",
  },
  {
    id: 4,
    name: "vibrant-red",
    color: "#ff356f",
  },
  {
    id: 5,
    name: "olive-green",
    color: "#2d5f62",
  },
  {
    id: 6,
    name: "green",
    color: "#127e58",
  },
  {
    id: 7,
    name: "smooth-pink",
    color: "#ef7191",
  },
  {
    id: 8,
    name: "flat-pink",
    color: "#e3179d",
  },
  {
    id: 9,
    name: "red",
    color: "#de0800",
  },
];

export function getRandomColor(): ColorType {
  return color_palette[Math.floor(Math.random() * color_palette.length)];
}

export function getColorByID(id: number): string | void {
  for (let color of color_palette) {
    if (color.id === id) {
      return color.color;
    }
  }
}
