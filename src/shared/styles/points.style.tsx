import clsx from "clsx";

export const pointsStyle = (points: number): string => clsx({
  "text-red-500": points < 0,
  "text-green-500": points > 0,
  "font-bold": true,
});
