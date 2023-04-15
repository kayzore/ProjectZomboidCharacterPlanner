import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import clsx from "clsx";

import { Skill } from "@app/types/skill.type";
import { useLocale } from "@app/hooks";

type Props = {
  skill: Skill,
  className?: string | object,
} & ComponentPropsWithoutRef<"li">;

const SkillLevelLimit: number = 10;

const SkillItem: FunctionComponent<Props> = (props: Props) => {
  const { className = null, skill, ...rest } = props;
  const { translate } = useLocale();

  return (
    <li className={clsx("flex justify-between w-full rounded-md px-1 hover:bg-slate-200 dark:hover:bg-slate-600", className)}{...rest}>
      <div>{translate(skill.name)}</div>

      <div className="flex items-center">
        {
          [...Array(SkillLevelLimit)].map((_, index) => {
            const level = index + 1;
            const classNames = clsx('w-3 h-3 mr-1 rounded-sm', {
              'bg-yellow-400': level <= skill.startingLevel,
              'bg-slate-300 dark:bg-slate-100': level > skill.startingLevel
            });

            return (
              <span key={`skill-${skill.name}-level-${level}`} className={classNames} />
            );
          })
        }
        <div className={clsx('font-semibold text-xs', {
          'text-green-500': skill.multiplier > 1
        })}>
         +{skill.multiplier * 100}%
        </div>
      </div>
    </li>
  );
};

export default SkillItem;
