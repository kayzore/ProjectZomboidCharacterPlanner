import { Trait } from "@app/types";

const occupationTraitsMock: Trait[] = [
  {
    id: "Mechanic",
    icon: "TraitMechanic.png",
    name: "trait.name.occupation.amateur-mechanic",
    description: "trait.description.occupation.amateur-mechanic",
    type: ["Occupation"],
    points: { amount: 0, operator: null },
    effects: [
      {
        skill: "skill.name.fitness",
        points: { amount: 3, operator: "+" },
      }
    ],
  },
];

export default occupationTraitsMock;
