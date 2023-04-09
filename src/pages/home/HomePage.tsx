import { FunctionComponent } from "react";

import { useLocale } from "@app/hooks";
import { PositiveTraits, NegativeTraits } from "@mock/index";
import MainLayout from "@layout/MainLayout";
import { Column, Separator, Title } from "@app/layout/components";
import { OccupationContainer, RemainingPoints, SkillsList, TraitsList } from "@pages/home/components";
import { useCharacterService } from "@app/hooks";

const HomePage: FunctionComponent = () => {
  const { translate } = useLocale();
  const { character, characterRemainingPoints, getTotalSkills, setOccupation, setTrait } = useCharacterService();

  return (
    <MainLayout>
      <div className="flex gap-12 w-full h-full text-black dark:text-white" data-testid="home-page-content">
        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <Title ReactElement={<h2 />} title={translate("occupation")} />
          <OccupationContainer onOccupationClick={setOccupation} />
        </Column>

        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <div className="h-1/2 flex flex-col">
            <Title ReactElement={<h2 />} title={translate("traits.positive.title")} />
            <TraitsList traits={PositiveTraits} onTraitClick={setTrait} activeTraits={character.traits} />
          </div>

          <Separator orientation="Horizontal" />

          <div className="h-1/2 flex flex-col pb-6">
            <Title ReactElement={<h2 />} title={translate("traits.negative.title")} />
            <TraitsList traits={NegativeTraits} onTraitClick={setTrait} activeTraits={character.traits} />
          </div>
        </Column>

        <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
          <Title ReactElement={<h2 />} title={translate("skills.title")}>
            <RemainingPoints points={characterRemainingPoints} />
          </Title>
          <SkillsList skills={getTotalSkills()} />
        </Column>
      </div>
    </MainLayout>
  );
};

export default HomePage;
