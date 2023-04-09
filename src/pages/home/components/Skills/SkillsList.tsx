import { Skill } from "@app/types/skill.type";
import { SkillCategoryItem } from "@pages/home/components";

type Props = {
  skills: Skill[],
};

const SkillsList: React.FunctionComponent<Props> = (props: Props) => {
  const { skills } = props;

  return (
    <ul className="mt-6 pr-2 overflow-y-auto">
      <SkillCategoryItem category="Passive" skills={skills} />

      <SkillCategoryItem category="Agility" skills={skills} />

      <SkillCategoryItem category="Combat" skills={skills} />

      <SkillCategoryItem category="Crafting" skills={skills} />

      <SkillCategoryItem category="Firearm" skills={skills} />

      <SkillCategoryItem category="Survivalist" skills={skills} />
    </ul>
  );
};

export default SkillsList;
