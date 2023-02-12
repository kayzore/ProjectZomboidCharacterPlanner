const NavBar: React.FunctionComponent = () => {
	return (
		<nav className="sticky top-0 bg-white border-b  border-slate-900/10 px-2 py-2.5 h-16">
			<div className="container flex flex-wrap justify-between mx-auto">
				<a href="/" className="flex items-center">
					<img alt="" src="/assets/images/spiffo.png" className="h-12 mr-3" />
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						Project Zomboid - Character Planner
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
