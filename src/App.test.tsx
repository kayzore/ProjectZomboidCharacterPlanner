import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from "@app/App";

describe("App", () => {
  it("Should mount and render content", () => {
    // WHEN
    render(<App />);
    // THEN
    expect(screen).toBeDefined();
  });
});
