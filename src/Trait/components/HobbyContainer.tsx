import React from "react";

import TraitsList from "@trait/components/TraitsList";
import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";

const HobbyContainer: React.FunctionComponent = () => {
	const { translate } = useLocale();

	return (
		<Column>
			<h2 className="">{translate("hobby")}</h2>

			<TraitsList traitType="Hobby" />
		</Column>
	);
};

export default HobbyContainer;
