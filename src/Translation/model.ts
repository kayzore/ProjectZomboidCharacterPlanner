export type Locale = "fr" | "en";

export type Translations = { [key: string]: string };

export type Languages = {
	en: Translations,
	fr: Translations,
};

export type UseLocale = {
	locale: Locale,
	setLocale: (newLocale: Locale) => void,
	translate: (key: string) => string,
};
