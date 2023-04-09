import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Occupation } from "@app/types/occupation.type";
import { Character } from "@app/types/character.type";
import { Func } from "@shared/types";
import { Skills } from "@mock/skills";

type UseCharacterService = {
  character: Character,
  setOccupation: Func<[Occupation], void>,
  getRemainingPoints: Func<[], number>,
};

export const getDefaultCharacter: Func<[], Character> = (): Character => ({
  id: uuid(),
  occupation: null,
  skills: Skills,
});

export const getCharacterRemainingPoints: Func<[Character], number> = (character: Character) => {
  let points = 0;

  // Add starting points
  points += character?.occupation?.startingPoints || 0;

  return points;
};

export const useCharacterService = (initialCharacter: Character = getDefaultCharacter()): UseCharacterService => {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const setOccupation = (occupation: Occupation): void => {
    setCharacter((prevCharacter) => ({ ...prevCharacter, occupation }));
  };

  const getRemainingPoints = (): number => {
    return getCharacterRemainingPoints(character);
  };

  return { character, getRemainingPoints, setOccupation };
};
