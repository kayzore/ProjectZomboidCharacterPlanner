type NavButtonProps = {
	children?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const NavButton: React.FunctionComponent<NavButtonProps> = (props: NavButtonProps) => {
	const { children, ...otherProps } = props;

	return (
		<button
			type="button"
			className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default NavButton;
