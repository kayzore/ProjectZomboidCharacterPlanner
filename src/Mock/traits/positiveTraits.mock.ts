import { Trait } from "../../Trait/model";

const positiveTraitsMock: Trait[] = [
	{
		icon: "TraitAdrenalineJunkie.png",
		name: "trait.name.positive.adrenaline-junkie",
		description: "trait.description.positive.adrenaline-junkie",
		type: ["Positive"],
		points: { amount: 8, operator: "-" },
		effects: [],
	},
	{
		icon: "TraitAthletic.png",
		name: "trait.name.positive.athletic",
		description: "trait.description.positive.athletic",
		type: ["Positive"],
		points: { amount: 10, operator: "-" },
		effects: [],
	},
	{
		icon: "TraitBrave.png",
		name: "trait.name.positive.brave",
		description: "trait.description.positive.brave",
		type: ["Positive"],
		points: { amount: 4, operator: "-" },
		effects: [],
	},
	{
		icon: "TraitCatsEyes.png",
		name: "trait.name.positive.cats-eyes",
		description: "trait.description.positive.cats-eyes",
		type: ["Positive"],
		points: { amount: 2, operator: "-" },
		effects: [],
	},
];

export default positiveTraitsMock;
