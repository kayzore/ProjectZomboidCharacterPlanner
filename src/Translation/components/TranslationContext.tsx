import React, { createContext, useState } from "react";

import { DefaultLocale, Locale } from "@translation/model";
import { Dictionary } from "@shared/types";

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

	return (
		<TranslationContext.Provider value={{ locale, setLocale, translations, setTranslations } as Context}>
			{props.children}
		</TranslationContext.Provider>
	);
};

export { TranslationContext, TranslationProvider };

export default TranslationContext;
