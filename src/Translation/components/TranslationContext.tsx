import React, { createContext, useState } from "react";

import { Locale } from "@translation/model";
import { DEFAULT_LOCALE } from "@translation/constants";

type Context = {
	locale: Locale,
	setLocale: (newLocale: Locale) => void,
};

type Props = { children: React.ReactElement | React.ReactElement[] };

const TranslationContext = createContext({ locale: DEFAULT_LOCALE, setLocale: () => void 0 } as Context);

const TranslationProvider: React.FunctionComponent<Props> = (props: Props) => {
	const [locale, setLocale] = useState(DEFAULT_LOCALE);

	return (
		<TranslationContext.Provider value={{ locale, setLocale } as Context}>
			{props.children}
		</TranslationContext.Provider>
	);
};

export { TranslationContext, TranslationProvider };

export default TranslationContext;
