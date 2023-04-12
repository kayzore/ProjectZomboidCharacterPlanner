import { FunctionComponent, ReactNode } from "react";

import Link from "@shared/components/Link";

type NavBarProps = {
  children?: ReactNode,
  title: string,
};

const NavBar: FunctionComponent<NavBarProps> = (props: NavBarProps) => {
  const { children, title } = props;

  return (
    <nav className="sticky top-0 bg-white dark:bg-slate-800 border-b shadow-sm border-slate-900/10 h-16 z-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-full">
        <Link href="/" className="flex items-center">
          <img alt="" src="/assets/images/spiffo.png" className="h-12 mr-3" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
            {title}
          </span>
        </Link>
        <div id="navbar-right-container" className="flex items-center">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
