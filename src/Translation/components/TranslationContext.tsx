import React, { createContext, useEffect, useState } from "react";

import { flattenObject } from '@core/helpers';
import { Dictionary } from "@shared/types";
import { DefaultLocale, Locale } from "@translation/model";
import appTranslations from "@translation/index";

type Context = {
	locale: Locale,
	setLocale: (newLocale: Locale) => void,
	translations: Dictionary<string>,
	setTranslations: (translations: Dictionary<string>) => void
};

type Props = {
	children: React.ReactElement | React.ReactElement[]
};

const TranslationContext = createContext({
	locale: DefaultLocale,
	setLocale: () => void 0,
	translations: {},
	setTranslations: () => void 0,
} as Context);

const TranslationProvider: React.FunctionComponent<Props> = (props: Props) => {
	const [locale, setLocale] = useState(DefaultLocale);
	const [translations, setTranslations] = useState({});

	useEffect(() => {
		if (Object.keys(translations).length === 0) {
			loadTranslations(locale);
		}
	}, [translations]);

	const getLocaleTranslations = (locale: string): object => appTranslations[locale as keyof typeof appTranslations];

	const hasLocale = (locale: string): boolean => getLocaleTranslations(locale) !== null;

	const loadTranslations = (locale: string): void => {
		const translationResources = getLocaleTranslations(locale);

		if (!translationResources) {
			throw new Error(`Failed to load translation resources for locale '${locale}'.`);
		}

		setTranslations(flattenObject(translationResources) as Dictionary<string>);
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

	return (
		<TranslationContext.Provider value={{
			locale,
			setLocale: handleSetLocale,
			translations
		} as Context}>
			{props.children}
		</TranslationContext.Provider>
	);
};

export { TranslationContext, TranslationProvider };

export default TranslationContext;
