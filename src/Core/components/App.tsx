import React from "react";

import { EN_LOCALE, FR_LOCALE} from "../../Translation/constants";
import TranslationContext from "../../Translation/TranslationContext";
import TraitsList from "../../Trait/components/TraitsList";
import useLocale from "../../Translation/useLocale";
import "./App.scss";

const App: React.FunctionComponent = () => {
	const { locale, setLocale } = useLocale();

	const toggleLocale = (): void => {
		setLocale(locale !== FR_LOCALE ? FR_LOCALE : EN_LOCALE);
	};

	return (
		<TranslationContext.Provider value={locale}>
			<h1 className="text-3xl font-bold underline lg:italic">Project Zomboid - Character Planner</h1>

			<div onClick={toggleLocale}>Locale : {locale}</div>

			<TraitsList traitType="Negative" />
			<TraitsList traitType="Positive" />
			<TraitsList traitType="Hobby" />
			<TraitsList traitType="Occupation" />
		</TranslationContext.Provider>
  );
};

export default App;
