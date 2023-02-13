import React from "react";

import { TranslationProvider } from "@translation/components/TranslationContext";
import HomePage from "@core/pages/HomePage";
import { ThemeProvider } from "@core/Theme/ThemeContext";

const App: React.FunctionComponent = () => (
	<TranslationProvider>
		<ThemeProvider>
			<HomePage />
		</ThemeProvider>
	</TranslationProvider>
);

export default App;
