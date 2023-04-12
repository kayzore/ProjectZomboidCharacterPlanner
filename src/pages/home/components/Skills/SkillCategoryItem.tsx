import { FunctionComponent } from "react";
import { Skill, SkillCategory } from "@app/types/skill.type";
import { SkillItem } from "@pages/home/components";
import { useLocale } from "@app/hooks";

type Props = {
  category: SkillCategory,
  skills: Skill[],
};

const SkillCategoryItem: FunctionComponent<Props> = (props: Props) => {
  const { category, skills } = props;
  const { translate } = useLocale();

  return (
    <li className="mb-4">
      <h3 className="underline">{translate(`skills.category.${category.toLowerCase()}`)}</h3>
      <ul className="ml-2 mb-6">
        {skills
          .filter((skill: Skill) => skill.category === category)
          .map((skill: Skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))
        }
      </ul>
    </li>
  );
};

export default SkillCategoryItem;
