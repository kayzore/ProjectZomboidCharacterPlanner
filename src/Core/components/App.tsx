import React from "react";

import { TranslationProvider } from "@translation/components/TranslationContext";
import HomePage from "@core/pages/HomePage";

const App: React.FunctionComponent = () => (
	<TranslationProvider>
		<HomePage />
	</TranslationProvider>
);

export default App;
