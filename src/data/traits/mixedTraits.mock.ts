import { Trait } from "@app/types";

const mixedTraitsMock: Trait[] = [
  {
    id: "Nutritionist",
    icon: "TraitNutritionist.png",
    name: "trait.name.hobby-occupation.nutritionist",
    description: "trait.description.hobby-occupation.nutritionist",
    type: ["Hobby", "Occupation"],
    points: { amount: 4, operator: "-" },
    effects: [],
  },
];

export default mixedTraitsMock;
