import { beforeAll, describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {HobbyTrait, TraitId} from "@app/types";
import { ThemeProvider, TranslationProvider } from "@app/providers";
import HomePage from "@pages/home/HomePage";
import { AdrenalineJunkieTrait, HobbyTraits, Occupations } from "@app/mock";

describe("pages -> HomePage", () => {
  beforeAll(() => {
    render(
      <TranslationProvider>
        <ThemeProvider>
          <HomePage />
        </ThemeProvider>
      </TranslationProvider>
    );
  });

  it("Should mount and render content", () => {
    // GIVEN
    const expectedDataTestId = "home-page-content";

    // THEN
    expect(screen.getByTestId(expectedDataTestId)).toBeDefined();
  });

  describe("-> Character remaining points", () => {
    const expectedDataTestId = "character-remaining-points";

    it("Should display by default '0' character remaining points to use", () => {
      // GIVEN
      const expectedRemainingPoints = "0";

      // THEN
      expect(screen.getByTestId(expectedDataTestId)).toBeDefined();
      expect(screen.getByTestId(expectedDataTestId).textContent).toBe(expectedRemainingPoints);
    });

    it("Should display the good amount of remaining points after occupation selection", async () => {
      // GIVEN
      const user = userEvent.setup();
      const expectedOccupation = Occupations[0];
      const expectedRemainingPoints = String(expectedOccupation.startingPoints);

      // WHEN
      await act(async () => await user.click(screen.getByTestId(expectedOccupation.id)));

      // THEN
      expect(screen.getByTestId(expectedDataTestId).textContent).toBe(expectedRemainingPoints);
    });
  });

  describe("-> Selectable traits", () => {
    it("Should highlight excluded traits when user click on trait", async () => {
      const byOccupationType = (hobbyTrait: HobbyTrait): boolean => hobbyTrait.type.includes('Occupation');
      const byHobbyTraitId = (hobbyTrait: HobbyTrait, expectedClickedTraitId: TraitId): boolean => hobbyTrait.id === expectedClickedTraitId;
      // GIVEN
      const user = userEvent.setup();
      const expectedClickedTrait = AdrenalineJunkieTrait;
      const expectedExcludedTraitIds = expectedClickedTrait.excluded;

      // WHEN
      await act(async () => await user.click(screen.getByTestId(expectedClickedTrait.id)));

      // THEN
      expectedExcludedTraitIds.forEach((expectedClickedTraitId: TraitId) => {
        const occupationHobbyTrait = HobbyTraits
          .filter(byOccupationType)
          .find((hobbyTrait) => byHobbyTraitId(hobbyTrait, expectedClickedTraitId));

        if (!occupationHobbyTrait) {
          // if check because hobby traits with Hobby type should not be displayed on screen but can be excluded by trait
          expect(screen.getByTestId(expectedClickedTraitId).className).toContain("line-through");
        }
      });
    });
  });
});
