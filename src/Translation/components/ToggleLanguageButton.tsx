import React from "react";

import { EN_LOCALE, FR_LOCALE } from "@translation/constants";
import useLocale from "@translation/hooks/useLocale";

const ToggleLanguageButton: React.FunctionComponent = () => {
	const { locale, setLocale } = useLocale();

	const toggleLocale = (): void => {
		setLocale(locale !== FR_LOCALE ? FR_LOCALE : EN_LOCALE);
	};

	return (
		<div onClick={toggleLocale}>Locale : {locale}</div>
	);
};

export default ToggleLanguageButton;
