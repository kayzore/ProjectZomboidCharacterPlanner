import { useContext } from "react";

import { TranslationContext } from "@app/providers";
import { Locale } from "@app/types";

export type TranslateFn = (key: string) => string;

type UseLocale = {
  locale: Locale,
  setLocale: (newLocale: Locale) => void,
  translate: TranslateFn,
};

export const useLocale = (): UseLocale => {
  const { locale, setLocale, translations } = useContext(TranslationContext);

  const translate = (key: string): string => {
    const translatedText = translations[key];

    if (!translatedText) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);

      return key;
    }

    return translatedText;
  };

  return { locale, setLocale, translate };
};
