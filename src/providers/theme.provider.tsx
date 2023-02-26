import { createContext, useState } from "react";

import { Func } from "@app/shared/types";

const DefaultTheme: string = 'default';

type Context = {
  theme: string,
  setTheme: Func<[string], void>
};

type ThemeContextProps = {
  children: React.ReactNode | React.ReactNode
};

const ThemeContext = createContext({
  theme: DefaultTheme,
  setTheme: () => void 0
} as Context);

const ThemeProvider: React.FunctionComponent<ThemeContextProps> = (props: ThemeContextProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(DefaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme } as Context}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
