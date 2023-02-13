import React from "react";

import { Character } from "../../Character/model";
import Column from "@core/layout/Column";
import SkillsList from "@skill/components/SkillsList";
import useLocale from "@translation/hooks/useLocale";

type Props = {
	character: Character,
};

const SkillsContainer: React.FunctionComponent<Props> = (props: Props) => {
	const { character } = props;
	const { translate } = useLocale();

	return (
		<Column>
			<h2 className="">{translate("skills")}</h2>

			<SkillsList character={character} />
		</Column>
	);
};

export default SkillsContainer;
