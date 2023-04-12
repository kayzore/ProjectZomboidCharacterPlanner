import { createContext, FunctionComponent, PropsWithChildren, useEffect, useState } from "react";

import { flattenObject } from '@shared/helpers';
import { Locale } from "@app/types";
import { Dictionary } from "@app/shared/types";

import en from '@assets/translations/en.json';
import fr from '@assets/translations/fr.json';
import { useLocalStorage } from "@app/hooks";

/**
 * Gets the available translations.
 */
const Translations = {
  en,
  fr
};

/**
 * Gets the default application locale.
 */
const DefaultLocale: Locale = 'en';

/**
 * Gets the translations for the given locale.
 * @param locale Locale
 * @returns Translations object for the given locale.
 */
const getLocaleTranslations = (locale: string): object => Translations[locale as keyof typeof Translations];

/**
 * Checks if the given locale has translations available.
 * @param locale Locale.
 * @returns True if the translation object is found; false otherwise.
 */
const hasLocale = (locale: string): boolean => getLocaleTranslations(locale) !== null;

/**
 * Gets the translations dictionary for the given locale.
 * @param locale Locale.
 * @returns Translation dictionary for the given locale.
 */
const getTranslationDictionary = (locale: string): Dictionary<string> => {
  const translationResources = getLocaleTranslations(locale);

  if (!translationResources) {
    throw new Error(`Failed to load translation resources for locale '${locale}'.`);
  }

  return flattenObject(translationResources) as Dictionary<string>;
};

type Context = {
  locale: Locale,
  setLocale: (newLocale: Locale) => void,
  translations: Dictionary<string>,
  setTranslations: (translations: Dictionary<string>) => void
};

const TranslationContext = createContext({
  locale: DefaultLocale,
  translations: {},
  setLocale: () => void 0,
  setTranslations: () => void 0,
} as Context);

const TranslationProvider: FunctionComponent<PropsWithChildren> = (props: PropsWithChildren) => {
  const [locale , setLocale] = useLocalStorage<Locale>("locale", DefaultLocale);
  const [translations, setTranslations] = useState(getTranslationDictionary(DefaultLocale));

  const loadTranslations = (locale: string): void => {
    setTranslations(getTranslationDictionary(locale));
  };

  const handleSetLocale = (newLocale: Locale): void => {
    if (hasLocale(newLocale)) {
      setLocale(newLocale);
    } else {
      throw new Error(`Can't set locale for locale '${locale}'.`);
    }
  };

  useEffect(() => {
    if (locale) {
      loadTranslations(locale);
    } else {
      throw new Error(`Can't load translation for locale '${locale}'.`);
    }
  }, [locale]);

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
