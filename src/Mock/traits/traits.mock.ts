import { Trait } from "../../Trait/model";
import positiveTraitsMock from "./positiveTraits.mock";
import negativeTraitsMock from "./negativeTraits.mock";
import occupationTraitsMock from "./occupationTraits.mock";
import hobbyTraitsMock from "./hobbyTraits.mock";
import mixedTraitsMock from "./mixedTraits.mock";

const traitsMock: Array<Trait> = [
	...positiveTraitsMock,
	...negativeTraitsMock,
	...occupationTraitsMock,
	...hobbyTraitsMock,
	...mixedTraitsMock,
];

export default traitsMock;
