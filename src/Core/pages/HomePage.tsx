import React from "react";

import MainLayout from "@core/layout/MainLayout";
import TraitsList from "@trait/components/TraitsList";
import ToggleLanguageButton from "@translation/components/ToggleLanguageButton";

const HomePage: React.FunctionComponent = () => (
	<MainLayout>
		<h1 className="text-3xl font-bold underline lg:italic">Project Zomboid - Character Planner</h1>

		<ToggleLanguageButton />

		<TraitsList traitType="Negative" />
		<TraitsList traitType="Positive" />
		<TraitsList traitType="Hobby" />
		<TraitsList traitType="Occupation" />
	</MainLayout>
);

export default HomePage;
