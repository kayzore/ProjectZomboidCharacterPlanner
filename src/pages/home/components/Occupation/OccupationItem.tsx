import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import clsx from "clsx";

import { useLocale } from "@app/hooks";
import { Occupation } from "@app/types";

type OccupationItemProps = {
  occupation: Occupation,
  onOccupationClick: (occupation: Occupation) => void;
} & ComponentPropsWithoutRef<"li">;

const OccupationItem: FunctionComponent<OccupationItemProps> = (props: OccupationItemProps) => {
  const { occupation, onOccupationClick, className, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li
      className={clsx("hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center h-16 rounded-md my-2 cursor-pointer", className)}
      onClick={(): void => onOccupationClick(occupation)}
      data-testid={occupation.id}
      {...rest}
    >
      <i className="w-16 h-16 mx-2">
        {occupation.icon ? <img src={`assets/images/occupations/${occupation.icon}`} width="64" height="64" /> : <></>}
      </i>
      {translate(occupation.name)}
    </li>
  );
};

export default OccupationItem;
