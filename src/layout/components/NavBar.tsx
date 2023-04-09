import { FunctionComponent } from "react";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

import { NavButton, NavDropDown, NavBar as GenericNavBar, NavDropDownItem, NavLink } from "@shared/components/NavBar";
import { Separator } from "@layout/components/Separator";
import { GitHubIcon } from "@shared/icons";
import { useLocale, useTheme } from "@app/hooks";

const NavBar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  const toggleTheme = (): void => {
    setTheme(theme == "default" ? "dark" : "default");
  };

  return (
    <GenericNavBar title="Project Zomboid - Character Planner">
      <NavDropDown title={locale}>
        <NavDropDownItem clicked={(): void => setLocale("fr")}>
          <span className="fi fi-fr mr-2" />
          <span className="font-semibold">Français</span>
        </NavDropDownItem>

        <NavDropDownItem clicked={(): void => setLocale("en")}>
          <span className="fi fi-gb mr-2" />
          <span className="font-semibold">English</span>
        </NavDropDownItem>
      </NavDropDown>

      <Separator orientation="Vertical" className="m-2.5 h-6" />

      <NavLink id="github-repository" href="https://github.com/Eastrall/ProjectZomboidCharacterPlanner" target="_blank">
        <GitHubIcon className="h-6 w-6 fill-slate-900 dark:fill-white" />
      </NavLink>

      <NavButton id="theme-switcher" onClick={toggleTheme}>
        <SunIcon className="w-6 h-6 block dark:hidden" />
        <MoonIcon className="w-6 h-6 hidden dark:block fill-white" />
      </NavButton>
    </GenericNavBar>
  );
};

export default NavBar;
