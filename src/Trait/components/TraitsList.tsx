import React from "react";

import { TraitType } from "../model";
import traitsMock from "../../Mock/traits/traits.mock";
import useLocale from "../../Translation/useLocale";

type Props = {
	traitType: TraitType,
};

const TraitsList: React.FunctionComponent<Props> = (props: Props) => {
	const { traitType } = props;
	const { translate } = useLocale();

	return (
		<>
			{traitsMock
				.filter((trait) => trait.type.includes(traitType))
				.map((trait) => (
					<li key={trait.name} className="mb-10 flex flex-col">
						<div className="flex">icon: <img src={`/assets/traits/${trait.icon}`} /></div>
						name: {translate(trait.name)}<br />
						description: {translate(trait.description)}<br />
						type: {trait.type.toString()}<br />
						points: {trait.points.operator}{trait.points.amount}<br />
						effects: {trait.effects}<br />
					</li>
				))
			}
		</>
	);
};

export default TraitsList;
