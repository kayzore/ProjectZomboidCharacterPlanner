import React from "react";

import { EN_LOCALE, FR_LOCALE} from "../../Translation/constants";
import useLocale from "../../Translation/useLocale";
import traitsMock from "../../Mock/traits/traits.mock";
import "./App.scss";

const App: React.FunctionComponent = () => {
	const { locale, setLocale, translate } = useLocale();

	const toggleLocale = (): void => {
		setLocale(locale !== FR_LOCALE ? FR_LOCALE : EN_LOCALE);
	};

	return (
		<>
			<h1 className="text-3xl font-bold underline lg:italic">Project Zomboid - Character Planner</h1>

			<div onClick={toggleLocale}>Locale : {locale}</div>

			<ul className="text-left">
				{traitsMock.map((trait) => (
					<li key={trait.name} className="mb-10 flex flex-col">
						<div className="flex">icon: <img src={`/assets/traits/${trait.icon}`} /></div>
						name: {translate(trait.name)}<br />
						description: {translate(trait.description)}<br />
						type: {trait.type.toString()}<br />
						points: {trait.points.operator}{trait.points.amount}<br />
						effects: {trait.effects}<br />
					</li>
				))}
			</ul>
		</>
  );
};

export default App;
