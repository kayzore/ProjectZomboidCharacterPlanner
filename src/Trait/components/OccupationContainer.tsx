import React from "react";

import { Trait, TraitType } from "@trait/model";
import TraitsList from "@trait/components/TraitsList";
import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";

type Props = {
	onTraitClick: (column: TraitType, trait: Trait) => void,
};

const OccupationContainer: React.FunctionComponent<Props> = (props: Props) => {
	const { onTraitClick } = props;
	const { translate } = useLocale();

	return (
		<Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
			<h2 className="">{translate("occupation")}</h2>

			<TraitsList traitType="Occupation" onTraitClick={onTraitClick} />
		</Column>
	);
};

export default OccupationContainer;
