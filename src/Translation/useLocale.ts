import { useContext, useEffect, useState } from "react";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./constants";
import translations from "./index";
import TranslationContext from "./TranslationContext";

const useLocale = (): UseLocale => {
	const localeContext = useContext(TranslationContext);
	const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

	const translate = (key: string): string => {
		const translationKey = (translations as Languages)?.[locale]?.[key];

		if (!translationKey) {
			console.warn(`Translation key "${key}" not found for locale "${locale}"`);
			return key;
		}

		return translationKey;
	};

	const handleSetLocale = (newLocale: Locale): void => {
		if (!ALLOWED_LOCALES.includes(newLocale)) {
			console.error(`Locale "${newLocale}" do not exist`);
		} else {
			setLocale(newLocale);
		}
	};

	useEffect(() => {
		handleSetLocale(localeContext as Locale);
	}, [localeContext]);

	return { locale, setLocale: handleSetLocale, translate };
};

export default useLocale;
