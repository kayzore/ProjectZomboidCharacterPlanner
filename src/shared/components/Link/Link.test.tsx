import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Link from "@shared/components/Link";

describe("shared -> components -> Link", () => {
  const shouldBeAnchorWithChildren = (expectedRole: string, expectedChildren: string): void => {
    expect(screen.getByRole(expectedRole)).toBeDefined();
    expect(screen.getByRole(expectedRole).textContent).toBe(expectedChildren);
  };

  it("Should return a link (<a>) with the good children", () => {
    // GIVEN
    const expectedRole = "link";
    const expectedChildren = "children";

    // WHEN
    render(<Link href="/">{expectedChildren}</Link>);

    // THEN
    shouldBeAnchorWithChildren(expectedRole, expectedChildren);
  });

  it("Should return a link without href if href is undefined", () => {
    // GIVEN
    const expectedRole = "link";
    const expectedChildren = "children";

    // WHEN
    render(<Link>{expectedChildren}</Link>);

    // THEN
    shouldBeAnchorWithChildren(expectedRole, expectedChildren);
  });
});
