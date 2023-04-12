import { useState } from "react";

import { Func } from "@shared/types";

export type UseLocalStorage<T> = [value: T | null, setValue: Func<[T], void>];

/**
 * useLocalStorage hook working with internal state can store and update value inside the browser local storage.
 * @param {string} key The stored key.
 * @param initialValue The initial value to store. *Optional for read only.
 * @return {UseLocalStorage} The value can be null if no initial value is provided and no value found for the specified key
 */
export const useLocalStorage = <T>(key: string, initialValue?: T): UseLocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : (initialValue || null);
    } catch (error) {
      console.error(error);
      return initialValue || null;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
