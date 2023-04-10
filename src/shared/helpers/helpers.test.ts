import { describe, expect, it } from 'vitest';

import { flattenObject } from "@shared/helpers";

describe("helpers", () => {
  describe("-> object.helper", () => {
    it("Should flattens the given object", () => {
      // GIVEN
      const initialObject = { test: { lvl1: { lvl2: "value" } }, another: { lvl: "another" } };
      const expectedFlattenObject = { "test.lvl1.lvl2": "value", "another.lvl": "another" };

      // WHEN
      const result = flattenObject(initialObject);

      // THEN
      expect(result).toStrictEqual(expectedFlattenObject);
    });
  });
});
