import { Skill } from "@skill/model";
import passiveSkillsMock from "./passiveSkills.mock";
import agilitySkillsMock from "@mock/skills/agilitySkills.mock";
import combatSkillsMock from "@mock/skills/combatSkills.mock";
import craftingSkillsMock from "@mock/skills/craftingSkills.mock";
import firearmSkillsMock from "@mock/skills/firearmSkills.mock";
import survivalistSkillsMock from "@mock/skills/survivalistSkills.mock";

const skillsMock: Array<Skill> = [
	...passiveSkillsMock,
	...agilitySkillsMock,
	...combatSkillsMock,
	...craftingSkillsMock,
	...firearmSkillsMock,
	...survivalistSkillsMock,
];

export default skillsMock;
