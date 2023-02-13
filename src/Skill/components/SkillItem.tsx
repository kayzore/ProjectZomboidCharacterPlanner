import React from "react";

import { Character } from "../../Character/model";
import { Skill } from "@skill/model";
import useLocale from "@translation/hooks/useLocale";
import { getTraitEffectBySkillName } from "../../Character/helpers";


type Props = {
	character: Character,
	skill: Skill,
};

const SkillItem: React.FunctionComponent<Props> = (props: Props) => {
	const { character, skill } = props;
	const { translate } = useLocale();

	const traitEffect = getTraitEffectBySkillName(skill.name, character.traits);

	return (
		<li className="flex flex-col p-4">
			<div>{translate(skill.name)}</div>
			<div className="flex gap-1">
				{Array.from({ length: 10 }).map((value, index) => {
					const squareIndex = index + 1;
					return (
						traitEffect && squareIndex <= traitEffect.points.amount
							? <div key={`skill-item-${index}`} className="w-4 h-4 border-2 border-slate-400 bg-amber-100" />
							: <div key={`skill-item-${index}`} className="w-4 h-4 border-2 border-slate-300 bg-slate-100" />
					);
				})}
			</div>
		</li>
	);
};

export default SkillItem;
