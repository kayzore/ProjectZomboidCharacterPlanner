import React, { useState } from "react";

import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";
import { Occupation, Occupations } from "@mock/occupations.model";
import { Func } from "@shared/types";
import OccupationItem from "./OccupationItem";

type Props = {
	onOccupationClick: Func<[Occupation], void>;
};

const OccupationContainer: React.FunctionComponent<Props> = (props: Props) => {
	const { onOccupationClick } = props;
	const { translate } = useLocale();
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
			<h2 className="text-xl font-medium">{translate("occupation")}</h2>
			<div className="mt-6 pr-2 overflow-y-auto">
				{
					Occupations.map((o, index) => (
						<OccupationItem key={o.id} occupation={o} onOccupationClick={(): void => onOccupationClick(o)} />
					))
				}
			</div>

		</Column>
	);
};

export default OccupationContainer;
