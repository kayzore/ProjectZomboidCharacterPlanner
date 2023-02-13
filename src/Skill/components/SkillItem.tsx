import React from "react";

import { Skill } from "@skill/model";
import useLocale from "@translation/hooks/useLocale";

type Props = {
	skill: Skill,
};

const SkillItem: React.FunctionComponent<Props> = (props: Props) => {
	const { skill } = props;
	const { translate } = useLocale();

	return (
		<li className="flex justify-between p-4">
			<div>{translate(skill.name)}</div>
			<div>{skill.level}</div>
		</li>
	);
};

export default SkillItem;
