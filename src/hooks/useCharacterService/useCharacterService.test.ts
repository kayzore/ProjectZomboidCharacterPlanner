import { describe, it, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { v4 as uuid } from "uuid";

import { Character, Occupation } from "@app/types";
import { UseCharacterService, useCharacterService } from "@app/hooks";
import { Occupations } from "@mock/occupations";

describe("hooks -> useCharacterService", () => {
  const expectNotNullCharacter = (character: Character): void => {
    expect(character).not.toBe(null);
  };

  const setOccupation = (expectedOccupation: Occupation): UseCharacterService => {
    const { result } = renderHook(useCharacterService);
    act(() => result.current.setOccupation(expectedOccupation));
    return result.current;
  };

  it("Should create an empty character if no character is provided", () => {
    vi.mock('uuid', () => ({ v4: (): string => "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000" }));
    const expectedCharacter: Character = { id: uuid(), occupation: null, skills: [], traits: [] };

    const { result } = renderHook(useCharacterService);

    const { character } = result.current;
    expect(character.id).toBe(expectedCharacter.id);
    expect(character.occupation).toBe(expectedCharacter.occupation);
  });

  it("Should set an occupation to the character when setOccupation is called", () => {
    const expectedOccupation = Occupations[1];

    const { character } = setOccupation(expectedOccupation);

    expectNotNullCharacter(character);
    expect(character.occupation).toMatchObject(expectedOccupation);
  });

  it("Should return the remaining points to use when characterRemainingPoints is called", () => {
    const expectedOccupation = Occupations[0];
    const expectedRemainingPoints = expectedOccupation.startingPoints;

    const { character, characterRemainingPoints } = setOccupation(expectedOccupation);

    expectNotNullCharacter(character);
    expect(characterRemainingPoints).toBe(expectedRemainingPoints);
  });
});
