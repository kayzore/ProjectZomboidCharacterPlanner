import React from "react";

import HomePage from "@app/pages/home/HomePage";
import { ThemeProvider, TranslationProvider } from "./providers";

const App: React.FunctionComponent = () => (
  <TranslationProvider>
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  </TranslationProvider>
);

export default App;
