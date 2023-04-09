import { Skill } from "@app/types/skill.type";
import { SkillItem } from "@pages/home/components";
import { useLocale } from "@app/hooks";

type Props = {
  skills: Skill[],
};

const SkillsList: React.FunctionComponent<Props> = (props: Props) => {
  const { skills } = props;
  const { translate } = useLocale();

  return (
    <ul className="mt-6 pr-2 overflow-y-auto">
      <li className="mb-4">
        <div>{translate("skills.category.passive")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Passive")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>

      <li className="mb-4">
        <div>{translate("skills.category.agility")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Agility")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>

      <li className="mb-4">
        <div>{translate("skills.category.combat")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Combat")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>

      <li className="mb-4">
        <div>{translate("skills.category.crafting")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Crafting")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>

      <li className="mb-4">
        <div>{translate("skills.category.firearm")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Firearm")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>

      <li className="mb-4">
        <div>{translate("skills.category.survivalist")}</div>
        <ul className="m-2">
          {skills
            .filter((skill: Skill) => skill.category === "Survivalist")
            .map((skill: Skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))
          }
        </ul>
      </li>
    </ul>
  );
};

export default SkillsList;
