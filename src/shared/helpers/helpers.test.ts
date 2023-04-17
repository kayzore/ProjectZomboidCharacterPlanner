import { describe, expect, it } from 'vitest';

import { flattenObject, localPath } from "@shared/helpers";

describe("helpers", () => {
  describe("-> object.helper", () => {
    it("flattenObject -> Should flattens the given object", () => {
      // GIVEN
      const initialObject = { test: { lvl1: { lvl2: "value" } }, another: { lvl: "another" } };
      const expectedFlattenObject = { "test.lvl1.lvl2": "value", "another.lvl": "another" };

      // WHEN
      const result = flattenObject(initialObject);

      // THEN
      expect(result).toStrictEqual(expectedFlattenObject);
    });
  });

  describe("-> url.helper", () => {
    it("localPath -> Should return the path for a given route with the local environment base path included", () => {
      // GIVEN
      const expectedRoute = "/expected-route";
      const expectedPath = `${process.env.VITE_BASE_PATH}/expected-route`.replace("//", "/");

      // WHEN
      const result = localPath(expectedRoute);

      // THEN
      expect(result).toStrictEqual(expectedPath);
    });
  });
});
