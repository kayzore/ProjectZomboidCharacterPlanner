import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

import { Character } from "@app/types/character.type";
import { Occupation } from "@app/types/occupation.type";
import { Skill } from "@app/types/skill.type";
import { Func } from "@shared/types";
import { Skills } from "@mock/skills";
import {Trait} from "@app/types";

type UseCharacterService = {
  character: Character,
  characterRemainingPoints: number,
  setOccupation: Func<[Occupation], void>,
  getTotalSkills: Func<[], Skill[]>,
  setTrait: Func<[Trait], void>,
};

export const getDefaultCharacter: Func<[], Character> = (): Character => ({
  id: uuid(),
  occupation: null,
  skills: Skills,
  traits: [],
});

export const getCharacterTotalSkills = (character: Character): Skill[] => {
  const skills = [] as Skill[];

  // Add occupations skills multiplier to character skills multiplier
  Skills.forEach((skill: Skill) => {
    const occupationSkill = character.occupation?.skills
      .filter((occupationSkill: Skill) => occupationSkill.name === skill.name)[0]
      || { ...skill, multiplier: 0 };

    skills.push({ ...skill, multiplier: skill.multiplier + occupationSkill.multiplier });
  });

  return skills;
};

export const getCharacterRemainingPoints = (character: Character): number => {
  let points = 0;

  // Add starting points
  points += character?.occupation?.startingPoints || 0;

  // Add traits points
  character.traits.forEach((trait: Trait) => {
    points += trait.points;
  });

  return points;
};

export const useCharacterService = (initialCharacter: Character = {...getDefaultCharacter()}): UseCharacterService => {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const setOccupation = (occupation: Occupation): void => {
    setCharacter((prevCharacter) => ({ ...prevCharacter, occupation, skills: [...Skills], traits: [] }));
  };

  const setTrait = (trait: Trait): void => {
    setCharacter((prevCharacter) => {
      let traits;

      if (prevCharacter.traits.includes(trait)) {
        traits = prevCharacter.traits.filter((t: Trait) => t.name !== trait.name);
      } else {
        traits = [...prevCharacter.traits, trait];
      }

      return { ...prevCharacter, traits, skills: [...Skills] };
    });
  };

  const characterRemainingPoints = useMemo(() => getCharacterRemainingPoints(character), [character]);

  const getTotalSkills = (): Skill[] => {
    return getCharacterTotalSkills(character);
  };

  return { character, characterRemainingPoints, getTotalSkills, setOccupation, setTrait };
};
