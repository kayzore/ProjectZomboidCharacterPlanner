import React from "react";

import TraitsList from "@trait/components/TraitsList";
import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";

const OccupationContainer: React.FunctionComponent = () => {
	const { translate } = useLocale();

	return (
		<Column>
			<h2 className="">{translate("occupation")}</h2>

			<TraitsList traitType="Occupation" />
		</Column>
	);
};

export default OccupationContainer;
