
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
	icon: string,
	name: string,
	description: string,
	type: TraitType[],
	points: TraitPoint,
	effects: TraitEffect[],
};
