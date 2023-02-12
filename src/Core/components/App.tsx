import React from "react";

import { TranslationProvider } from "../../Translation/TranslationContext";
import TraitsList from "../../Trait/components/TraitsList";
import ToggleLanguageButton from "../../Translation/components/ToggleLanguageButton";
import "./App.scss";

const App: React.FunctionComponent = () => (
	<TranslationProvider>
		<h1 className="text-3xl font-bold underline lg:italic">Project Zomboid - Character Planner</h1>

		<ToggleLanguageButton />

		<TraitsList traitType="Negative" />
		<TraitsList traitType="Positive" />
		<TraitsList traitType="Hobby" />
		<TraitsList traitType="Occupation" />
	</TranslationProvider>
);

export default App;
