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
  characterFullSkills: Skill[],
  characterRemainingPoints: number,
  setOccupation: Func<[Occupation], void>,
  toggleTrait: Func<[Trait], void>,
};

export const getDefaultCharacter: Func<[], Character> = (): Character => ({
  id: uuid(),
  occupation: null,
  skills: Skills,
  traits: [],
});

export const getCharacterTotalSkills = (character: Character): Skill[] => {
  const skills = [] as Skill[];

  Skills.forEach((skill: Skill) => {
    // Update skill multiplier
    const occupationSkill = character.occupation?.skills
      .filter((occupationSkill: Skill) => occupationSkill.name === skill.name)[0]
      || { ...skill, multiplier: 0 };
    const multiplier = skill.multiplier + occupationSkill.multiplier;

    // TODO: Update skill starting level

    skills.push({ ...skill, multiplier });
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
    setCharacter({ ...getDefaultCharacter(), occupation });
  };

  const toggleTrait = (trait: Trait): void => {
    if (character.occupation) {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        traits: prevCharacter.traits.includes(trait)
          ? prevCharacter.traits.filter((t: Trait) => t.name !== trait.name)
          : [...prevCharacter.traits, trait],
      }));
    }
  };

  const characterRemainingPoints = useMemo(() => getCharacterRemainingPoints(character), [character]);

  const characterFullSkills = useMemo(() => getCharacterTotalSkills(character), [character]);

  return { character, characterFullSkills, characterRemainingPoints, setOccupation, toggleTrait };
};
