import useTheme from '@core/Theme/hooks/useTheme';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { Func } from '@shared/types';
import DropDown from '../DropDown/DropDown';
import DropDownItem from '../DropDown/DropDownItem';

const NavBar: React.FunctionComponent = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme: Func<[], void> = () => {
		setTheme(theme == 'default' ? 'dark' : 'default');
	};

	return (
		<nav className="sticky top-0 bg-white dark:bg-slate-900 border-b shadow-sm border-slate-900/10 h-16 z-20">
			<div className="container flex flex-wrap justify-between items-center mx-auto h-full">
				<a href="/" className="flex items-center">
					<img alt="" src="/assets/images/spiffo.png" className="h-12 mr-3" />
					<span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
						Project Zomboid - Character Planner
					</span>
				</a>
				<div id="navbar-right-container" className="flex items-center">
					<DropDown />
					{/* <div id="language-toggle" className="w-10 bg-red-500">
						<></>
					</div> */}
					<div className="border-r m-2.5 h-6" />
					<a id="github-link" href="https://github.com/Eastrall/ProjectZomboidCharacterPlanner" className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700">
						<svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-900 dark:fill-white">
							<path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z" />
						</svg>
					</a>
					<button onClick={toggleTheme} type="button" id="theme-switch" className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer">
						<SunIcon className="w-6 h-6 block dark:hidden" />
						<MoonIcon className="w-6 h-6 hidden dark:block fill-white" />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
