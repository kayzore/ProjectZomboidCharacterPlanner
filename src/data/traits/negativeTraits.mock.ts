import { Trait } from "@app/types";

const negativeTraitsMock: Trait[] = [
  {
    id: "Agoraphobic",
    icon: "TraitAgoraphobic.png",
    name: "trait.name.negative.agoraphobic",
    description: "trait.description.negative.agoraphobic",
    type: ["Negative"],
    points: { amount: 4, operator: "+" },
    effects: [],
  },
];

export default negativeTraitsMock;
