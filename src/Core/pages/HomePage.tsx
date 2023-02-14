import React, {useCallback, useState} from "react";

import { Character } from "../../Character/model";
import { Trait, TraitType } from "@trait/model";
import MainLayout from "@core/layout/MainLayout";
import ToggleLanguageButton from "@translation/components/ToggleLanguageButton";
import OccupationContainer from "@trait/components/OccupationContainer";
import PositiveNegativeContainer from "@trait/components/PositiveNegativeContainer";
import SkillsContainer from "@skill/components/SkillsContainer";
import { getNewCharacter } from "../../Character/helpers";

const HomePage: React.FunctionComponent = () => {
	const [character, setCharacter] = useState<Character>(getNewCharacter());

	const onTraitClick = useCallback((column: TraitType,trait: Trait): void => {
		if (column === "Occupation") {
			const updatedCharacter = {
				...character,
				traits: character.traits.filter((t: Trait) => !t.type.includes("Occupation"))
			} as Character;

			if (character.traits.includes(trait)) {
				updatedCharacter.traits.filter((t) => t.name === trait.name);
			} else {
				updatedCharacter.traits.push(trait);
			}

			setCharacter(updatedCharacter);
		}
	}, [character]);

	return (
		<MainLayout>
			<h1 className="text-3xl font-bold underline lg:italic text-black dark:text-white">Project Zomboid - Character Planner</h1>

			<ToggleLanguageButton />

			<div className="flex gap-12 w-full h-full text-black dark:text-white">
				<OccupationContainer onTraitClick={onTraitClick} />

				<PositiveNegativeContainer />

				<SkillsContainer character={character} />
			</div>
		</MainLayout>
	);
};

export default HomePage;
