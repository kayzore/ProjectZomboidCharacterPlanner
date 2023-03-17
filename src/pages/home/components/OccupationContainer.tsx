import React, { useState } from "react";

import clsx from "clsx";

import OccupationItem from "./OccupationItem";
import { Occupation } from "@app/types";
import { Occupations } from "@app/data";

type Props = {
  onOccupationClick: (occupation: Occupation) => void;
};

const OccupationContainer: React.FunctionComponent<Props> = (props: Props) => {
  const { onOccupationClick } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOccupationClick = (occupation: Occupation, index: number): void => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      onOccupationClick(occupation);
    }
  };

  return (
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
  );
};

export default OccupationContainer;
