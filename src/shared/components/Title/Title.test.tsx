import { ElementType } from 'react';
import { describe, it, expect } from 'vitest';
import { render, getByRole } from '@testing-library/react';

import Title from "@shared/components/Title";

describe("shared -> components -> Title", () => {
  ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((titleType: string) => {
    it(`Should return an <${titleType}> title`, () => {
      // GIVEN
      const expectedTitleValue = "Title";
      const expectedRole = "heading";
      const expectedTitleType = titleType as ElementType;

      // WHEN
      const { container } = render(<Title as={expectedTitleType}>{expectedTitleValue}</Title>);

      // THEN
      expect(getByRole(container, expectedRole)).toBeDefined();
      expect(getByRole(container, expectedRole, { name: expectedTitleValue })).toBeDefined();
    });
  });

  it(`Should return an <h1> when component as props is not given`, () => {
    // GIVEN
    const expectedTitleValue = "Title";
    const expectedRole = "heading";
    const expectedTitleType = "h1";

    // WHEN
    const { container } = render(<Title>{expectedTitleValue}</Title>);

    // THEN
    expect(getByRole(container, expectedRole)).toBeDefined();
    expect(getByRole(container, expectedRole, { name: expectedTitleValue })).toBeDefined();
    expect(getByRole(container, expectedRole, { name: expectedTitleValue }).nodeName.toLowerCase()).toBe(expectedTitleType);
  });
});
