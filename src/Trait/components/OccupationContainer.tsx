import React from "react";

import useLocale from "@translation/hooks/useLocale";
import Column from "@core/layout/Column";
import { Occupation, Occupations } from "@mock/occupations.model";
import { Action } from "@shared/types";

type Props = {
	onOccupationClick: Action<[Occupation]>;
};

const OccupationContainer: React.FunctionComponent<Props> = (props: Props) => {
	const { onOccupationClick } = props;
	const { translate } = useLocale();

	return (
		<Column className="bg-white shadow-md border dark:border-none dark:bg-slate-800 rounded-lg">
			<h2 className="">{translate("occupation")}</h2>
			<div className="mt-6 overflow-y-auto">
				{
					Occupations.map(o => (
						<div key={o.id}
							className="hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center h-16 rounded-md my-2 cursor-pointer"
							onClick={(): void => onOccupationClick(o)}>
							<i className="w-16 h-16 mx-2">
								{o.icon ? <img src={`assets/images/occupations/${o.icon}`} width="64" height="64" /> : <></>}
							</i>
							{translate(o.name)}
						</div>
					))
				}
			</div>

		</Column>
	);
};

export default OccupationContainer;
