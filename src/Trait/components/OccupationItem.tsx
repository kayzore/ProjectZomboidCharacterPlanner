import { Occupation } from "@mock/occupations.model";
import { Func } from "@shared/types";
import useLocale from "@translation/hooks/useLocale";
import clsx from "clsx";

type OccupationItemProps = {
  occupation: Occupation,
  onOccupationClick: Func<[Occupation], void>;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const OccupationItem: React.FunctionComponent<OccupationItemProps> = (props: OccupationItemProps) => {
  const { occupation, onOccupationClick, className, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li className={clsx("hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center h-16 rounded-md my-2 cursor-pointer", className)}
      onClick={(): void => onOccupationClick(occupation)} {...rest}>
      <i className="w-16 h-16 mx-2">
        {occupation.icon ? <img src={`assets/images/occupations/${occupation.icon}`} width="64" height="64" /> : <></>}
      </i>
      {translate(occupation.name)}
    </li>
  );
};

export default OccupationItem;
