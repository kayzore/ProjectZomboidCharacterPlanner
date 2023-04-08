import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from "@pages/home/HomePage";
import { ThemeProvider, TranslationProvider } from "@app/providers";

describe("pages -> HomePage", () => {
  it("Should mount and render content", () => {
    // GIVEN
    const expectedDataTestId = "home-page-content";
    // WHEN
    render(
      <TranslationProvider>
        <ThemeProvider>
          <HomePage />
        </ThemeProvider>
      </TranslationProvider>
    );
    // THEN
    expect(screen.getByTestId(expectedDataTestId)).toBeDefined();
  });
});
