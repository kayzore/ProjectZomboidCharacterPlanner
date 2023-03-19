import clsx from "clsx";

import { useLocale } from "@app/hooks";
import { Trait } from "@app/types";

type Props = {
  trait: Trait,
  onTraitClick: (trait: Trait) => void,
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const TraitItem: React.FunctionComponent<Props> = (props: Props) => {
  const { onTraitClick, trait, className, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li className={clsx("flex items-center h-8 rounded-md my-1 px-2 hover:bg-slate-100 dark:hover:bg-slate-700 hover:cursor-pointer", className)}
      onClick={(): void => onTraitClick(trait)} {...rest}>
      <img src={`assets/images/traits/${trait.icon}`} width="16" height="16" />

      <div className="flex justify-between w-full ml-3">
        <div>{translate(trait.name)}</div>
        <div className={clsx({
          'text-red-500': trait.points > 0,
          'text-green-500': trait.points < 0,
          'font-bold': true
        })}>
          { trait.points > 0 ? `+${trait.points}` : trait.points}
        </div>
      </div>
    </li>
  );
};

export default TraitItem;
