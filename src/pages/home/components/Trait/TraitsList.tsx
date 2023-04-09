import { Trait } from "@app/types";

import { TraitItem } from "@pages/home/components";

type Props = {
  traits: Trait[],
  onTraitClick: (trait: Trait) => void,
};

const TraitsList: React.FunctionComponent<Props> = (props: Props) => {
  const { traits, onTraitClick } = props;

  return (
    <ul className="mt-6 pr-2 overflow-y-auto">
      {
        traits.map((trait: Trait) => (
          <TraitItem key={trait.name} trait={trait} onTraitClick={(trait: Trait): void => onTraitClick(trait)} />
        ))
      }
    </ul>
  );
};

export default TraitsList;
