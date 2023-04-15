import { FunctionComponent } from "react";

import { PositiveTraits, NegativeTraits } from "@mock/index";
import { Column, MainLayout, Separator, ColumnTitle } from "@layout/MainLayout";
import { OccupationContainer, RemainingPoints, SkillsList, TraitsList } from "@pages/home/components";
import { useCharacterService, useLocale } from "@app/hooks";

const HomePage: FunctionComponent = () => {
  const { translate } = useLocale();
  const { character, characterFullSkills, characterRemainingPoints, setOccupation, toggleTrait } = useCharacterService();

  return (
    <MainLayout>
      <div className="flex gap-12 w-full h-full text-black dark:text-white" data-testid="home-page-content">
        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <ColumnTitle title={translate("occupation")} />
          <OccupationContainer onOccupationClick={setOccupation} />
        </Column>

        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <div className="h-1/2 flex flex-col">
            <ColumnTitle title={translate("traits.positive.title")} />
            <TraitsList traits={PositiveTraits} onTraitClick={toggleTrait} activeTraits={character.traits} />
          </div>

          <Separator orientation="Horizontal" />

          <div className="h-1/2 flex flex-col pb-6">
            <ColumnTitle title={translate("traits.negative.title")} />
            <TraitsList traits={NegativeTraits} onTraitClick={toggleTrait} activeTraits={character.traits} />
          </div>
        </Column>

        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <ColumnTitle title={translate("skills.title")}>
            <RemainingPoints points={characterRemainingPoints} />
          </ColumnTitle>
          <SkillsList skills={characterFullSkills} />
        </Column>
      </div>
    </MainLayout>
  );
};

export default HomePage;
