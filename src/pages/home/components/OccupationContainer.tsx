import React, { useState } from "react";

import clsx from "clsx";
import { Occupation } from "@app/types";
import { useLocale } from "@app/hooks";
import { Column } from "@app/layout/components";

import OccupationItem from "./OccupationItem";
import { Occupations } from "@app/data";

type Props = {
  onOccupationClick: (occupation: Occupation) => void;
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
