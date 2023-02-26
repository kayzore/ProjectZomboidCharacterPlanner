export type TraitType = "Positive" | "Negative" | "Occupation" | "Hobby";

export type TraitPoint = {
	amount: number,
	operator: "+" | "-" | null,
};

export type TraitEffect = {
	skill: string,
	points: TraitPoint,
};

export type Trait = {
  id: string;
	icon: string,
	name: string,
	description: string,
	type?: TraitType[],
	points: TraitPoint,
	effects?: TraitEffect[],
};

export interface TraitNew {
  /**
   * Gets the trait name.
   */
  name: string;
  /**
   * Gets the trait description.
   */
  description: string;
  /**
   * Gets the trait icon.
   */
  icon: string;
  /**
   * Gets the mutually exclusive traits.
   */
  excluded: string[];
  /**
   * Gets the trait points.
   */
  points: number;
  effect: object[]; // TODO: type
}
