import { useContext } from "react";

import { Locale } from "@translation/model";
import { TranslationContext } from "@translation/components/TranslationContext";

type UseLocale = {
  locale: Locale,
  setLocale: (newLocale: Locale) => void,
  translate: (key: string) => string,
};

const useLocale = (): UseLocale => {
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

export default useLocale;
