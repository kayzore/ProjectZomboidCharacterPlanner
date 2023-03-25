import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Occupation } from "@appTypes/occupation.type";
import { Character } from "@appTypes/character.type";
import { Func } from "@shared/types";

type UseCharacterService = {
  character: Character,
  setOccupation: Func<[Occupation], void>,
};

export const useCharacterService = (
  initialCharacter: Character = { id: uuid(), occupation: null }
): UseCharacterService => {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const setOccupation = (occupation: Occupation): void => {
    setCharacter((prevCharacter) => ({ ...prevCharacter, occupation }));
  };

  return { character, setOccupation };
};
