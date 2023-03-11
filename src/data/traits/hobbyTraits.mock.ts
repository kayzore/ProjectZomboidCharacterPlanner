import { Trait } from "@app/types";

const hobbyTraitsMock: Trait[] = [
  {
    id: "Mechanic",
    icon: "TraitMechanic.png",
    name: "trait.name.hobby.amateur-mechanic",
    description: "trait.description.hobby.amateur-mechanic",
    type: ["Hobby"],
    points: { amount: 5, operator: "-" },
    effects: [],
  },
];

export default hobbyTraitsMock;
