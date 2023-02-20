
export type Skill = {
  name: string,
  category: "Passive" | "Agility" | "Combat" | "Crafting" | "Firearm" | "Survivalist",
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplier: number,
};
