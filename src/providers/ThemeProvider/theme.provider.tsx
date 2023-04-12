import { createContext, FunctionComponent, PropsWithChildren } from "react";

import { Func } from "@shared/types";
import { useLocalStorage } from "@app/hooks";

export const DefaultTheme: Theme = 'default';

type Context = {
  theme: Theme,
  setTheme: Func<[Theme], void>,
};

export type Theme = "default" | "dark";

const ThemeContext = createContext({
  theme: DefaultTheme,
  setTheme: () => void 0
} as Context);

const ThemeProvider: FunctionComponent<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  const [theme, setTheme] = useLocalStorage<Theme>("theme", DefaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme } as Context}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
