import React from "react";

import { TraitType } from "@trait/model";
import traitsMock from "@mock/traits/traits.mock";
import TraitItem from "@trait/components/TraitItem";

type Props = {
	traitType: TraitType,
};

const TraitsList: React.FunctionComponent<Props> = (props: Props) => {
	const { traitType } = props;

	return (
		<ul>
			{traitsMock
				.filter((trait) => trait.type.includes(traitType))
				.map((trait) => (
					<TraitItem key={trait.name} trait={trait} />
				))
			}
		</ul>
	);
};

export default TraitsList;
