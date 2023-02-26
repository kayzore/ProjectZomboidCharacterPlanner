type NavBarProps = {
  children?: React.ReactNode
};

const NavBar: React.FunctionComponent<NavBarProps> = (props: NavBarProps) => {
  const { children } = props;

  return (
    <nav className="sticky top-0 bg-white dark:bg-slate-800 border-b shadow-sm border-slate-900/10 h-16 z-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-full">
        <a href="/" className="flex items-center">
          <img alt="" src="/assets/images/spiffo.png" className="h-12 mr-3" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
            Project Zomboid - Character Planner
          </span>
        </a>
        <div id="navbar-right-container" className="flex items-center">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
