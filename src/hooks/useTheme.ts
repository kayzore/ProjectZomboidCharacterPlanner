import { useContext, useEffect } from "react";

import { Theme, ThemeContext } from "@app/providers";

type UseTheme = {
  theme: Theme,
  setTheme: (newTheme: Theme) => void,
};

export const useTheme: () => UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const getHtmlElement = (): HTMLElement | null => {
    const elements = document.getElementsByTagName('html');

    return elements && elements.length > 0 ? elements[0] : null;
  };

  const updateDOMWithTheme = (newTheme: string): void => {
    const htmlElement: HTMLElement | null = getHtmlElement();

    if (htmlElement) {
      htmlElement.classList.remove(theme);
      htmlElement.classList.add(newTheme);
    }
  };

  const handleSetTheme = (newTheme: Theme): void => {
    setTheme(newTheme);
    updateDOMWithTheme(newTheme);
  };

  useEffect(() => {
    updateDOMWithTheme(theme);
  }, []);

  return { theme, setTheme: handleSetTheme };
};
