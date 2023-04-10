import { useContext } from "react";
import { describe, it, expect } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';

import { DefaultTheme, ThemeContext, ThemeProvider } from "@app/providers";

describe("providers -> ThemeProvider", () => {
  describe("Provider", () => {
    it("Should mount and render the children", () => {
      // GIVEN
      const expectedChildren = "TestRender";
      // WHEN
      render(<ThemeProvider>{expectedChildren}</ThemeProvider>);
      // THEN
      expect(screen.getByText(expectedChildren)).toBeTruthy();
    });
  });

  describe("Context", () => {
    it("Should have a theme key with default theme value", () => {
      // GIVEN
      const expectedDefaultTheme = DefaultTheme;
      // WHEN
      const { result } = renderHook(() => useContext(ThemeContext));
      // THEN
      expect(result.current.theme).toBe(expectedDefaultTheme);
    });

    it("Should have a setTheme function", () => {
      // GIVEN
      const expectedReturnValue = void 0;
      // WHEN
      const { result } = renderHook(() => useContext(ThemeContext));
      // THEN
      expect(result.current.setTheme("default")).toBe(expectedReturnValue);
    });
  });
});
