import clsx from "clsx";

import { Skill } from "@app/types/skill.type";
import { useLocale } from "@app/hooks";

type Props = {
  skill: Skill,
  className?: string | object,
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const TraitItem: React.FunctionComponent<Props> = (props: Props) => {
  const { className = null, skill, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li className={clsx("flex justify-between w-full", className)}{...rest}>
      <div>{translate(skill.name)}</div>

      <div className="flex font-light italic">
        <div>
          {translate("skills.startingLevel")}: {skill.startingLevel}
        </div>
        &nbsp;|&nbsp;
        <div>
          {translate("skills.multiplier")}: {skill.multiplier}
        </div>
      </div>
    </li>
  );
};

export default TraitItem;
