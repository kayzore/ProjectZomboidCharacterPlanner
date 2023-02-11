
type Locale = "fr" | "en";

type Translations = { [key: string]: string };

type Languages = {
	en: Translations,
	fr: Translations,
};

type UseLocale = {
	locale: string,
	setLocale: (newLocale: Locale) => void,
	translate: (key: string) => string,
};
