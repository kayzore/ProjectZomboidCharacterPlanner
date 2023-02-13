import React from "react";

import { Character } from "../../Character/model";
import SkillItem from "@skill/components/SkillItem";
import skillsMock from "@mock/skills/skills.mock";

type Props = {
	character: Character,
};

const SkillsList: React.FunctionComponent<Props> = (props: Props) => {
	const { character } = props;

	return (
		<ul>
			{skillsMock
				.map((skill) => (
					<SkillItem key={skill.name} skill={skill} character={character} />
				))
			}
		</ul>
	);
};

export default SkillsList;
