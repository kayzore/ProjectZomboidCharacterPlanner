import { createContext, FunctionComponent, ReactNode } from "react";

import { Func } from "@shared/types";
import { useLocalStorage } from "@app/hooks";

export const DefaultTheme: Theme = 'default';

type Context = {
  theme: Theme,
  setTheme: Func<[Theme], void>,
};

type ThemeContextProps = {
  children: ReactNode
};

export type Theme = "default" | "dark";

const ThemeContext = createContext({
  theme: DefaultTheme,
  setTheme: () => void 0
} as Context);

const ThemeProvider: FunctionComponent<ThemeContextProps> = (props: ThemeContextProps) => {
  const { children } = props;
  const [theme, setTheme] = useLocalStorage<Theme>("theme", DefaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme } as Context}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
