export type SkillCategory = "Passive" | "Agility" | "Combat" | "Crafting" | "Firearm" | "Survivalist";

export interface Skill {
  name: string;
  category: SkillCategory;
  startingLevel: number;
  multiplier: number;
}
