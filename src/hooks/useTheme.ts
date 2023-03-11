import { useContext } from "react";
import { ThemeContext } from "@app/providers";

type UseTheme = {
  theme: string,
  setTheme: (newTheme: string) => void
};

export const useTheme: () => UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const getHtmlElement = (): HTMLElement | null => {
    const elements = document.getElementsByTagName('html');

    return elements && elements.length > 0 ? elements[0] : null;
  };

  const handleSetTheme = (newTheme: string): void => {
    const htmlElement: HTMLElement | null = getHtmlElement();

    if (htmlElement) {
      setTheme(newTheme);
      htmlElement.classList.remove(theme);
      htmlElement.classList.add(newTheme);
    }
  };

  return {
    theme: theme,
    setTheme: handleSetTheme
  };
};
