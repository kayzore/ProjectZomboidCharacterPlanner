import React, { useState } from "react";

import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";
import { Occupation, Occupations } from "@mock/occupations.model";
import { Func } from "@shared/types";
import OccupationItem from "./OccupationItem";
import clsx from "clsx";

type Props = {
  onOccupationClick: Func<[Occupation], void>;
};

const OccupationContainer: React.FunctionComponent<Props> = (props: Props) => {
  const { onOccupationClick } = props;
  const { translate } = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOccupationClick = (occupation: Occupation, index: number): void => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      onOccupationClick(occupation);
    }
  };

  return (
    <Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
      <h2 className="text-xl font-medium">{translate("occupation")}</h2>
      <ul className="mt-6 pr-2 overflow-y-auto">
        {
          Occupations.map((o, index) => (
            <OccupationItem key={o.id} occupation={o} onOccupationClick={(): void => handleOccupationClick(o, index)}
              className={clsx({
                'bg-slate-200 dark:bg-slate-600': activeIndex == index
              })} />
          ))
        }
      </ul>

    </Column>
  );
};

export default OccupationContainer;
