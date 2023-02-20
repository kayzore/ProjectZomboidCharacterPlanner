import React from "react";

import { Trait } from "@trait/model";
import useLocale from "@translation/hooks/useLocale";

type Props = {
  trait: Trait,
  onClick: (trait: Trait) => void,
};

const TraitItem: React.FunctionComponent<Props> = (props: Props) => {
  const { onClick, trait } = props;
  const { translate } = useLocale();

  return (
    <li className="flex p-4 gap-2 items-center hover:bg-gray-300 dark:hover:bg-gray-600 hover:cursor-pointer" onClick={(): void => onClick(trait)}>
      <img src={`/assets/traits/${trait.icon}`} />

      <div className="flex justify-between w-full">
        <div>{translate(trait.name)}</div>
        <div>{trait.points.operator}{trait.points.amount}</div>
      </div>
    </li>
  );
};

export default TraitItem;
