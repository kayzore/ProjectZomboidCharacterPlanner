import { beforeAll, describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HomePage from "@pages/home/HomePage";
import { ThemeProvider, TranslationProvider } from "@app/providers";
import { Occupations } from "@app/mock";

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
});
