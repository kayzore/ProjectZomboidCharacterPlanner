// import { useCallback, useState } from "react";

// import { Character } from "../../Character/model";
// import { Trait, TraitType } from "@trait/model";
import { Occupation } from "@app/types";
import MainLayout from "@layout/MainLayout";
import { useCallback } from "react";
import OccupationContainer from "./components/OccupationContainer";
import PositiveNegativeContainer from "./components/PositiveNegativeContainer";
// import OccupationContainer from "@trait/components/OccupationContainer";
// import PositiveNegativeContainer from "@trait/components/PositiveNegativeContainer";
// import SkillsContainer from "@skill/components/SkillsContainer";
// import { getNewCharacter } from "../../Character/helpers";
// import { Occupation } from "@mock/occupations.model";

const HomePage: React.FunctionComponent = () => {
  // const [character, setCharacter] = useState<Character>(getNewCharacter());

  // const onTraitClick = useCallback((column: TraitType, trait: Trait): void => {
  //   if (column === "Occupation") {
  //     const updatedCharacter = {
  //       ...character,
  //       traits: character.traits.filter((t: Trait) => !t.type.includes("Occupation"))
  //     } as Character;

  //     if (character.traits.includes(trait)) {
  //       updatedCharacter.traits.filter((t) => t.name === trait.name);
  //     } else {
  //       updatedCharacter.traits.push(trait);
  //     }

  //     setCharacter(updatedCharacter);
  //   }
  // }, [character]);

  const onOccupationClick = useCallback((occupation: Occupation) => {
    console.log(occupation);
  }, []);

  return (
    <MainLayout>
      <div className="flex gap-12 w-full h-full text-black dark:text-white">
        <OccupationContainer onOccupationClick={onOccupationClick} />

        <PositiveNegativeContainer />

        {/* <SkillsContainer character={character} /> */}
      </div>
    </MainLayout>
  );
};

export default HomePage;
