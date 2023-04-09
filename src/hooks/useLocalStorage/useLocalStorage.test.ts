import { describe, it, expect, beforeEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useLocalStorage } from "@app/hooks";

describe("hooks -> useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("Should return the initial value when no stored value found", () => {
    // GIVEN
    const expectedValue = "initial-value";

    // WHEN
    const { result } = renderHook(() => useLocalStorage("test", expectedValue));
    const [value] = result.current;

    // THEN
    expect(value).toBe(expectedValue);
  });

  it("Should return null when no stored value found and no initial value exist", () => {
    // GIVEN
    const expectedValue = null;

    // WHEN
    const { result } = renderHook(() => useLocalStorage("test"));
    const [value] = result.current;

    // THEN
    expect(value).toBe(expectedValue);
  });

  it("Should return the new value when setValue function is called", () => {
    // GIVEN
    const expectedInitialValue = "initial-value";
    const expectedUpdatedValue = "updated-value";

    // WHEN
    const { result } = renderHook(() => useLocalStorage("test", expectedInitialValue));
    act(() => result.current[1](expectedUpdatedValue));
    const [value] = result.current;

    // THEN
    expect(value).toBe(expectedUpdatedValue);
  });

  it("Should update the locale storage when setValue function is called", () => {
    // GIVEN
    const expectedInitialValue = "initial-value";
    const expectedUpdatedValue = "updated-value";

    // WHEN
    const { result } = renderHook(() => useLocalStorage("test", expectedInitialValue));
    act(() => result.current[1](expectedUpdatedValue));

    // THEN
    expect(JSON.parse(window.localStorage.getItem("test") || "")).toBe(expectedUpdatedValue);
  });
});
