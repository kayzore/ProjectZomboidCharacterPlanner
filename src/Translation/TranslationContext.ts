import { createContext } from "react";
import { DEFAULT_LOCALE } from "./constants";

const TranslationContext = createContext(DEFAULT_LOCALE);

export default TranslationContext;
