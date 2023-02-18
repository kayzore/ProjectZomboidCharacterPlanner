import { Dictionary } from '@shared/types';
import { useContext } from "react";

import { Locale } from "@translation/model";
import { TranslationContext } from "@translation/components/TranslationContext";
import appTranslations from "@translation/index";
import { flattenObject } from '@core/helpers';

type UseLocale = {
	locale: Locale,
	setLocale: (newLocale: Locale) => void,
	translate: (key: string) => string,
};

const useLocale = (): UseLocale => {
	const { locale, setLocale, translations, setTranslations } = useContext(TranslationContext);

	const translate = (key: string): string => {
		const translatedText = translations[key];

		if (!translatedText) {
			console.warn(`Translation key "${key}" not found for locale "${locale}"`);

			return key;
		}

		return translatedText;
	};

	const handleSetLocale = (newLocale: Locale): void => {
		if (hasLocale(newLocale)) {
			setLocale(newLocale);
			loadTranslations(newLocale);
		}
		else {
			console.error(`Locale "${newLocale}" do not exist`);
		}
	};

	const loadTranslations = (locale: string): void => {
		const translationResources = getLocaleTranslations(locale);

		if (!translationResources) {
			throw new Error(`Failed to load translation resources for locale '${locale}'.`);
		}

		setTranslations(flattenObject(translationResources) as Dictionary<string>);
	};

	const getLocaleTranslations = (locale: string): object => appTranslations[locale as keyof typeof appTranslations];

	const hasLocale = (locale: string): boolean => getLocaleTranslations(locale) !== null;

	return { locale, setLocale: handleSetLocale, translate };
};

export default useLocale;
