import { useState } from "react";

import { Func } from "@shared/types";
import hasWindow from "@app/core/hasWindow.helper";

type UseLocalStorage = [unknown, Func<[unknown], void>];

export const useLocalStorage = (key: string, initialValue: unknown): UseLocalStorage => {
  const [storedValue, setStoredValue] = useState(() => {
    if (!hasWindow()) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: unknown): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (hasWindow()) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
