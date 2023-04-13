import { FunctionComponent } from "react";

import { useLocale } from "@app/hooks";
import { PositiveTraits, NegativeTraits } from "@mock/index";
import MainLayout from "@layout/MainLayout";
import { Column, Separator, ColumnTitle } from "@app/layout/components";
import { OccupationContainer, RemainingPoints, SkillsList, TraitsList } from "@pages/home/components";
import { useCharacterService } from "@app/hooks";

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
          <ColumnTitle
            asideChildren={<RemainingPoints points={characterRemainingPoints} />}
            title={translate("skills.title")}
          />
          <SkillsList skills={characterFullSkills} />
        </Column>
      </div>
    </MainLayout>
  );
};

export default HomePage;
