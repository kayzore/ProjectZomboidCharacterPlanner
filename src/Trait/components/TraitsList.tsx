import React from "react";

import { Trait, TraitType } from "@trait/model";
import TraitItem from "@trait/components/TraitItem";
import traitsMock from "@mock/traits/traits.mock";

type Props = {
  traitType: TraitType,
  onTraitClick: (column: TraitType, trait: Trait) => void,
};

const TraitsList: React.FunctionComponent<Props> = (props: Props) => {
  const { onTraitClick, traitType } = props;

  return (
    <ul>
      {traitsMock
        .filter((trait) => trait.type.includes(traitType))
        .map((trait) => (
          <TraitItem
            onClick={(trait): void => onTraitClick(traitType, trait)}
            key={trait.name}
            trait={trait}
          />
        ))
      }
    </ul>
  );
};

export default TraitsList;
