import { FunctionComponent } from "react";
import clsx from "clsx";

import { Trait } from "@app/types";
import { TraitItem } from "@pages/home/components";
import { TranslateFn, useLocale } from "@app/hooks";

type Props = {
  activeTraits: Trait[],
  traits: Trait[],
  onTraitClick: (trait: Trait) => void,
};

const getTraitItemTitle = (traitsWhoExclude: Trait[], translate: TranslateFn): string | undefined => {
  if (traitsWhoExclude.length !== 0) {
    const traitNames = traitsWhoExclude
      .map((traitWhoExclude) => translate(traitWhoExclude.name))
      .join(`${translate("and")} `);

    return translate("traits.excludedByTraits")
      .replace('{{traitNames}}', traitNames);
  }

  return undefined;
};

const TraitsList: FunctionComponent<Props> = (props: Props) => {
  const { activeTraits, traits, onTraitClick } = props;
  const { translate } = useLocale();

  return (
    <ul className="mt-6 pr-2 overflow-y-auto">
      {traits.map((trait: Trait) => {
        const byExcludedTraitId = (activeTrait: Trait): boolean => activeTrait.excluded.includes(trait.id);
        const traitsWhoExclude = activeTraits.filter(byExcludedTraitId);

        return (
          <TraitItem
            key={trait.name}
            className={clsx({ 'bg-slate-200 dark:bg-slate-600': activeTraits.includes(trait) })}
            trait={trait}
            onTraitClick={onTraitClick}
            canBeSelected={traitsWhoExclude.length === 0}
            data-testid={trait.id}
            title={getTraitItemTitle(traitsWhoExclude, translate)}
          />
        );
      })}
    </ul>
  );
};

export default TraitsList;
