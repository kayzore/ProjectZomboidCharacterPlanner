import React from "react";

import { TraitType } from "@trait/model";
import traitsMock from "@mock/traits/traits.mock";
import useLocale from "@translation/hooks/useLocale";

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
					<li key={trait.name} className="flex p-4 gap-2 items-center">
						<img src={`/assets/traits/${trait.icon}`} />

						<div className="flex justify-between w-full">
							<div>{translate(trait.name)}</div>
							<div>{trait.points.operator}{trait.points.amount}</div>
						</div>
					</li>
				))
			}
		</>
	);
};

export default TraitsList;
