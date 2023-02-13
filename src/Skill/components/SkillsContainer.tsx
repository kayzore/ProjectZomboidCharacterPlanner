import React from "react";

import Column from "@core/layout/Column";
import SkillsList from "@skill/components/SkillsList";
import useLocale from "@translation/hooks/useLocale";

const SkillsContainer: React.FunctionComponent = () => {
	const { translate } = useLocale();

	return (
		<Column>
			<h2 className="">{translate("skills")}</h2>

			<SkillsList />
		</Column>
	);
};

export default SkillsContainer;
