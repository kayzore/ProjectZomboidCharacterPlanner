
import { useContext } from "react";

import { Action, Func } from "@shared/types";
import ThemeContext from "../ThemeContext";

type UseTheme = {
	theme: string,
	setTheme: Action<[string]>
};

const useTheme: () => UseTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const getHtmlElement: Func<[], HTMLElement | null> = () => {
		const elements = document.getElementsByTagName('html');

		return elements && elements.length > 0 ? elements[0] : null;
	};

	const handleSetTheme: Func<[string], void> = (newTheme: string) => {
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

export default useTheme;
