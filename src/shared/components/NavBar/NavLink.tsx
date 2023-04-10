type NavLinkProps = {
  children?: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const NavLink: React.FunctionComponent<NavLinkProps> = (props: NavLinkProps) => {
  const { children, ...otherProps } = props;

  return (
    <a className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700" {...otherProps}>
      {children}
    </a>
  );
};

export default NavLink;
