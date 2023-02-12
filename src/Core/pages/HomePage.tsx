import React from "react";

import MainLayout from "@core/layout/MainLayout";
import ToggleLanguageButton from "@translation/components/ToggleLanguageButton";
import OccupationContainer from "@trait/components/OccupationContainer";
import PositiveNegativeContainer from "@trait/components/PositiveNegativeContainer";

const HomePage: React.FunctionComponent = () => (
	<MainLayout>
		<h1 className="text-3xl font-bold underline lg:italic">Project Zomboid - Character Planner</h1>

		<ToggleLanguageButton />

		<div className="flex gap-12 w-full h-full pt-8 pb-8">
			<OccupationContainer />

			<PositiveNegativeContainer />
		</div>
	</MainLayout>
);

export default HomePage;
