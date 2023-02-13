import React from "react";

import SkillItem from "@skill/components/SkillItem";
import skillsMock from "@mock/skills/skills.mock";

const SkillsList: React.FunctionComponent = () => (
	<ul>
		{skillsMock
			.map((skill) => (
				<SkillItem key={skill.name} skill={skill} />
			))
		}
	</ul>
);

export default SkillsList;
