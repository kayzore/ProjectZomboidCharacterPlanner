import React from "react";

import TraitsList from "@trait/components/TraitsList";
import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";

const PositiveNegativeContainer: React.FunctionComponent = () => {
	const { translate } = useLocale();

	return (
		<Column className="flex justify-between gap-8 overflow-y-auto">
			<div className="border-2 h-1/2 overflow-y-auto">
				<h2 className="">{translate("negative")}</h2>
				<TraitsList traitType="Negative" />
			</div>

			<div className="border-2 h-1/2 overflow-y-auto">
				<h2 className="">{translate("positive")}</h2>
				<TraitsList traitType="Positive" />
			</div>
		</Column>
	);
};

export default PositiveNegativeContainer;
