import clsx from "clsx";

import { Skill } from "@app/types/skill.type";
import { Separator } from "@layout/components";
import { useLocale } from "@app/hooks";

type Props = {
  skill: Skill,
  className?: string | object,
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const SkillItem: React.FunctionComponent<Props> = (props: Props) => {
  const { className = null, skill, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li className={clsx("flex justify-between w-full rounded-md px-1 hover:bg-slate-200 dark:hover:bg-slate-600", className)}{...rest}>
      <div>{translate(skill.name)}</div>

      <ul className="flex font-light italic">
        <li>
          {translate("skills.startingLevel")}: {skill.startingLevel}
        </li>
        <Separator orientation="Vertical" />
        <li>
          {translate("skills.multiplier")}: {skill.multiplier}
        </li>
      </ul>
    </li>
  );
};

export default SkillItem;
