import { createContext, FunctionComponent, ReactNode } from "react";

import { Func } from "@app/shared/types";
import { useLocalStorage } from "@app/hooks";

export const DefaultTheme: string = 'default';

type Context = {
  theme: string,
  setTheme: Func<[string], void>,
};

type ThemeContextProps = {
  children: ReactNode
};

const ThemeContext = createContext({
  theme: DefaultTheme,
  setTheme: () => void 0
} as Context);

const ThemeProvider: FunctionComponent<ThemeContextProps> = (props: ThemeContextProps) => {
  const { children } = props;
  const [theme, setTheme] = useLocalStorage("theme", DefaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme } as Context}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
