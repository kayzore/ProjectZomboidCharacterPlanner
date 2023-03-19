import { FunctionComponent, ReactElement } from "react";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

import { Separator } from "./components";
import { NavBar, NavButton, NavLink, NavDropDown, NavDropDownItem } from "./components/NavBar";
import { GitHubIcon } from "@shared/icons";
import { Locale } from "@app/types";
import { useLocale, useTheme } from "@app/hooks";

type Props = {
  children: ReactElement | ReactElement[];
};

const MainLayout: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  const toggleTheme = (): void => {
    setTheme(theme == "default" ? "dark" : "default");
  };

  const toggleLocale = (locale: Locale): void => {
    console.log(`toggle locale to: ${locale}`);
    setLocale(locale);
  };

  return (
    <>
      <header>
        <NavBar>
          <NavDropDown title={locale}>
            <NavDropDownItem clicked={(): void => toggleLocale('fr')}>
              <span className="fi fi-fr mr-2" />
              <span className="font-semibold">Français</span>
            </NavDropDownItem>
            <NavDropDownItem clicked={(): void => toggleLocale('en')}>
              <span className="fi fi-gb mr-2" />
              <span className="font-semibold">English</span>
            </NavDropDownItem>
          </NavDropDown>
          <Separator orientation="Vertical" className="m-2.5 h-6" />
          <NavLink id="github-repository" href="https://github.com/Eastrall/ProjectZomboidCharacterPlanner">
            <GitHubIcon className="h-6 w-6 fill-slate-900 dark:fill-white" />
          </NavLink>
          <NavButton id="theme-switcher" onClick={toggleTheme}>
            <SunIcon className="w-6 h-6 block dark:hidden" />
            <MoonIcon className="w-6 h-6 hidden dark:block fill-white" />
          </NavButton>
        </NavBar>
      </header>

      <main className="absolute top-0 right-0 bottom-0 left-0 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto pt-32 pb-16 h-full overflow-hidden">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
